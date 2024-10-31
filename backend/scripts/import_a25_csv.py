from games.A25.misc_a25.models import *
from games.A25.chara_a25.models import *
from games.A25.items_a25.models import *
from games.A25.quest_a25.models import *
import csv, codecs, sys, urllib.request, json
from scripts.util import import_generic, slug_me
from datetime import datetime

BASE_URL = 'https://raw.githubusercontent.com/theBowja/resleriana-db/main/data/'

names =     ['ability', 'base_enemy', 'battle', 'battle_hint', 'battle_tool', 'battle_tool_trait', 'character',
             'character_tag', 'effect', 'emblem', 'emblem_rarity', 'enemy', 'enemy_ai_unit', 'equipment_tool',
             'equipment_tool_trait', 'hyperlink', 'item', 'leader_skill_condition', 'memoria',
             'memoria_buff_growth', 'quest', 'recipe', 'recipe_plan', 'research', 'research_effect',
             'research_effect_level', 'reward_set', 'skill', 'species', 'timeline_panel', 'wave']
names_gbl = ['ability', 'base_enemy', 'battle_hint', 'battle_tool', 'battle_tool_trait', 'character',
             'character_tag', 'effect', 'emblem', 'emblem_rarity', 'enemy', 'equipment_tool',
             'equipment_tool_trait', 'item', 'memoria',
             'quest', 'recipe', 'recipe_plan', 'research', 'research_effect',
             'skill', 'species']
jsons = {}
languages = ['en', 'zh_cn', 'zh_tw']

trait_cat = {
    1: Filterable.objects.get(text_en="Attack"),
    2: Filterable.objects.get(text_en="Enhance"),
    3: Filterable.objects.get(text_en="Weakening"),
    4: Filterable.objects.get(text_en="Recovery")
}

elems = {
    1: Filterable.objects.get(kind="element", text_en="Slash"),
    2: Filterable.objects.get(kind="element", text_en="Strike"),
    3: Filterable.objects.get(kind="element", text_en="Stab"),
    5: Filterable.objects.get(kind="element", text_en="Fire"),
    6: Filterable.objects.get(kind="element", text_en="Ice"),
    7: Filterable.objects.get(kind="element", text_en="Bolt"),
    8: Filterable.objects.get(kind="element", text_en="Air"),
}
colors = {
    1: Filterable.objects.get(kind="color", text_en="Blue"),
    2: Filterable.objects.get(kind="color", text_en="Purple"),
    3: Filterable.objects.get(kind="color", text_en="Yellow"),
    4: Filterable.objects.get(kind="color", text_en="Red"),
    5: Filterable.objects.get(kind="color", text_en="Green"),
}
area = {
    2: Name.objects.get(text_en="Single"),
    3: Name.objects.get(text_en="Single"),
    4: Name.objects.get(text_en="Area"),
    5: Name.objects.get(text_en="Area"),
}
item_kind = {
    1: Filterable.objects.get(text_en="Material"),
    2: Filterable.objects.get(text_en="Training"),
    3: Filterable.objects.get(text_en="Training"),
    4: Filterable.objects.get(text_en="Training"),
    5: Filterable.objects.get(text_en="Currency"),
    6: Filterable.objects.get(text_en="Currency"),
    7: Filterable.objects.get(text_en="Currency"),
    8: Filterable.objects.get(text_en="Currency"),
    9: Filterable.objects.get(text_en="Currency"),
    10: Filterable.objects.get(text_en="Currency"),
    11: Filterable.objects.get(text_en="Currency"),
    12: Filterable.objects.get(text_en="Currency"),
    12: Filterable.objects.get(text_en="Currency"),
    13: Filterable.objects.get(text_en="Currency"),
    14: Filterable.objects.get(text_en="Currency"),
}

combat_kind = {
    1: Filterable.objects.get(text_en="Attack", kind="combat_type"),
    2: Filterable.objects.get(text_en="Enhance", kind="combat_type"),
    3: Filterable.objects.get(text_en="Weakening", kind="combat_type"),
    4: Filterable.objects.get(text_en="Recovery", kind="combat_type"),
}

equip_kind = {
    1: Filterable.objects.get(text_en="Weapon", kind="equipment"),
    2: Filterable.objects.get(text_en="Armor", kind="equipment"),
    3: Filterable.objects.get(text_en="Accessory", kind="equipment"),
}

def search(query, ls, field='id'):
    return [element for element in ls if element[field] == query]

def replaceNewline(text):
    return text.replace('\r', '').replace('\n', '<br>')

# Some names can be changed, some can't (without manual input), hence volatile.
def checkName(text_en, text_ja, text_sc, text_tc, volatile=False):
    if text_ja:
        try:
            name = Name.objects.get(text_ja=text_ja)
            if volatile and text_en:
                if text_ja != text_en: # I can see this causing problems if they use EN...
                    name.text_en = text_en
                    name.text_tc = text_tc
                    name.text_sc = text_sc
                name.save()
            return name
        except:
            name = Name(
                text_ja = text_ja,
                text_en = text_en,
                text_tc = text_tc,
                text_sc = text_sc,
            )
            name.save()
            return name
    return None

def checkDesc(text_en, text_ja, text_sc, text_tc):
    if text_ja:
        try:
            desc = Desc.objects.get(text_ja=text_ja.replace('\r', '').replace('\n', '<br>').strip())
            if text_en:
                if text_en != text_ja:
                    desc.text_en = text_en.replace('\r', '').replace('\n', '<br>')
                    desc.text_sc = text_sc.replace('\r', '').replace('\n', '<br>')
                    desc.text_tc = text_tc.replace('\r', '').replace('\n', '<br>')
                desc.save()
            return desc
        except:
            desc = Desc(
                text_ja = text_ja.replace('\r', '').replace('\n', '<br>').strip(),
                text_en = text_en.replace('\r', '').replace('\n', '<br>'),
                text_tc = text_tc.replace('\r', '').replace('\n', '<br>'),
                text_sc = text_sc.replace('\r', '').replace('\n', '<br>')
            )
            desc.save()
            return desc
    return None

def ImpFilter(row, index, **kwargs):
    try:
        obj = Filterable.objects.get(text_ja=row['JP'], kind=kwargs.get("kind"))
    except:
        print(f'Adding {row["JP"]}')
        obj = Filterable(
            text_en = row['EN'],
            text_ja = row['JP'],
            text_sc = row['SC'],
            text_tc = row['TC'],
            slug = slug_me(row['EN'] if row['EN'] else kwargs.get("kind"), Filterable.objects.all()),
            kind = kwargs.get("kind"),
        )
        obj.save()

def ImpEvent(row, index):
    checkDesc(row['EN'], row['JP'], row['SC'], row['TC'])

def ImpName(row, index):
    checkName(row['EN'], row['JP'], row['SC'], row['TC'], volatile=True)

def retrieve_all_jsons():
    for name in names:
        with urllib.request.urlopen(f'{BASE_URL}/master/jp/{name}.json') as url:
            data = json.load(url)
            jsons[name] = data
        if name in names_gbl:
            print(name)
            for lang in languages:
                with urllib.request.urlopen(f'{BASE_URL}/master/{lang}/{name}.json') as url:
                    data = json.load(url)
                    for entry in jsons[name]:
                        found = search(entry['id'], data)
                        if found:
                            for key in ['description', 'name', 'another_name', 'requirements', 'abbreviation', 'leader_skill', 'effect_name', 'requirement']:
                                if key in found[0]:
                                    entry[f'{key}_{lang}'] = found[0][key]
    with urllib.request.urlopen('https://raw.githubusercontent.com/theBowja/resleriana-db/main/resources/Japan/path_hash_to_name.json') as url:
        data = json.load(url)
        jsons['path_hash_to_name'] = data

"""Run me first for any updates holy shit"""
def createUpdate():
    obj = LatestUpdate()
    obj.save()
    print('Update Created')

def createUpdateGBL():
    obj = LatestUpdateGBL()
    obj.save()
    print('Update Created')

def import_research():
    for res in jsons['research']:
        if res['id'] < 2000:
            filt = Filterable.objects.get(slug='combat-research') if res['id'] < 1000 else Filterable.objects.get(slug='alchemy-research')

            try:
                obj = Research.objects.get(level=res['level'], kind=filt)

                if len(res['requirements']) > 0:
                    req = checkDesc(
                        text_ja = res['requirements'][0]['name'],
                        text_en = res['requirements_en'][0]['name'] if 'requirements_en' in res else '',
                        text_sc = res['requirements_zh_cn'][0]['name'] if 'requirements_zh_cn' in res else '',
                        text_tc = res['requirements_zh_tw'][0]['name'] if 'requirements_zh_tw' in res else '',
                    )
                name = checkName(
                    text_ja=res['name'],
                    text_en=res['name_en'] if 'name_en' in res else '',
                    text_sc=res['name_zh_cn'] if 'name_zh_cn' in res else '',
                    text_tc=res['name_zh_tw'] if 'name_zh_tw' in res else '',
                    volatile=True
                )
                eff = search(res['research_effect_ids'][0], jsons['research_effect'])[0]
                # print this shit
                desc = checkDesc(
                    text_ja=eff['name'],
                    text_en=eff['name_en'] if 'name_en' in eff else '',
                    text_sc=eff['name_zh_cn'] if 'name_zh_cn' in eff else '',
                    text_tc=eff['name_zh_tw'] if 'name_zh_tw' in eff else '',
                )
                print('Updated Research', res['level'], filt.slug)
            except:
                req = None
                if len(res['requirements']) > 0:
                    req = checkDesc(
                        text_ja = res['requirements'][0]['name'],
                        text_en = res['requirements_en'][0]['name'] if 'requirements_en' in res else '',
                        text_sc = res['requirements_zh_cn'][0]['name'] if 'requirements_zh_cn' in res else '',
                        text_tc = res['requirements_zh_tw'][0]['name'] if 'requirements_zh_tw' in res else '',
                    )
                name = checkName(
                    text_ja=res['name'],
                    text_en=res['name_en'] if 'name_en' in res else '',
                    text_sc=res['name_zh_cn'] if 'name_zh_cn' in res else '',
                    text_tc=res['name_zh_tw'] if 'name_zh_tw' in res else '',
                )
                eff = search(res['research_effect_ids'][0], jsons['research_effect'])[0]
                desc = checkDesc(
                    text_ja=eff['name'],
                    text_en=eff['name_en'] if 'name_en' in eff else '',
                    text_sc=eff['name_zh_cn'] if 'name_zh_cn' in eff else '',
                    text_tc=eff['name_zh_tw'] if 'name_zh_tw' in eff else '',
                )
                vals = search(res['research_effect_ids'][0], jsons['research_effect_level'], field='research_effect_id')
                same_type = Research.objects.filter(desc=desc)
                val = search(len(same_type)+1, vals, field='level')[0]['value'] # heck this

                obj = Research(
                    level=res['level'],
                    kind=filt,
                    req=req,
                    name=name,
                    desc=desc,
                    cole=res['cost']['quantity'],
                    val=val
                )
                obj.save()
                print('Create Research', res['level'], filt.slug, name.text_ja, res['cost']['quantity'], val)

def import_combat_traits():
    for trait in jsons['battle_tool_trait']:
        try:
            obj = Trait.objects.get(index=trait['id'])
            print('Update', trait["name"], trait['id'])
        except:
            obj = Trait(gbl=False, slug=f'usable-trait-{trait["id"]}')
            print('Create', trait["name"], trait['id'])

        kind = Filterable.objects.get(slug="combat")

        name = checkName(
            text_ja = trait['name'],
            text_en = trait['name_en'] if 'name_en' in trait else '',
            text_sc = trait['name_zh_cn'] if 'name_zh_cn' in trait else '',
            text_tc = trait['name_zh_tw'] if 'name_zh_tw' in trait else '',
            volatile=True
        )

        if trait['description']:
            desc = checkDesc(
                text_ja = trait['description'],
                text_en = trait['description_en'] if 'description_en' in trait else '',
                text_sc = trait['description_zh_cn'] if 'description_zh_cn' in trait else '',
                text_tc = trait['description_zh_tw'] if 'description_zh_tw' in trait else '',
            )
        else:
            effect = search(trait['effects'][0]['id'], jsons['effect'])[0]
            desc = checkDesc(
                text_ja = effect['description'],
                text_en = effect['description_en'] if 'description_en' in effect else '',
                text_sc = effect['description_zh_cn'] if 'description_zh_cn' in effect else '',
                text_tc = effect['description_zh_tw'] if 'description_zh_tw' in effect else '',
            )
        eff = trait['effects'][0]['values']

        obj.name=name
        obj.desc=desc
        obj.val1=eff[0]/100
        obj.val2=eff[1]/100
        obj.val3=eff[2]/100
        obj.val4=eff[3]/100
        obj.val5=eff[4]/100
        obj.index=trait['id']
        obj.kind=kind
        obj.cat=trait_cat[trait['category_id']]

        for filterid in trait['filter_ids']:
            match filterid:
                case 1:
                    obj.trans_atk=True
                case 2:
                    obj.trans_buff=True
                case 3:
                    obj.trans_dbf=True
                case 4:
                    obj.trans_heal=True
        obj.save()

def import_equipment_traits():
    for trait in jsons['equipment_tool_trait']:
        try:
            obj = Trait.objects.get(index=trait['id']+99)
            print('Update', trait["name"], trait['id']+99)
        except:
            obj = Trait(gbl=False, slug=f'equip-trait-{trait["id"]+100}')
            print('Create', trait["name"], trait['id']+99)

        kind = Filterable.objects.get(slug="equipment")

        name = checkName(
            text_ja = trait['name'],
            text_en = trait['name_en'] if 'name_en' in trait else '',
            text_sc = trait['name_zh_cn'] if 'name_zh_cn' in trait else '',
            text_tc = trait['name_zh_tw'] if 'name_zh_tw' in trait else '',
            volatile=True
        )
        ability = search(trait['ability_ids'][0], jsons['ability'])[0]
        desc = checkDesc(
            text_ja = ability['description'],
            text_en = ability['description_en'] if 'description_en' in ability else '',
            text_sc = ability['description_zh_cn'] if 'description_zh_cn' in ability else '',
            text_tc = ability['description_zh_tw'] if 'description_zh_tw' in ability else '',
        )

        abl = trait['ability_ids']

        obj.name=name
        obj.desc=desc
        obj.val1=search(abl[0], jsons['ability'])[0]['effects'][0]['value']/100
        obj.val2=search(abl[1], jsons['ability'])[0]['effects'][0]['value']/100
        obj.val3=search(abl[2], jsons['ability'])[0]['effects'][0]['value']/100
        obj.val4=search(abl[3], jsons['ability'])[0]['effects'][0]['value']/100
        obj.val5=search(abl[4], jsons['ability'])[0]['effects'][0]['value']/100
        obj.index=trait['id']+99
        obj.kind=kind
        obj.cat=trait_cat[trait['category_id']]
        obj.trans_web=True
        obj.trans_arm=True
        obj.trans_acc=True
        obj.save()

def import_tags():
    for tag in jsons['character_tag']:
        try:
            ctag = Filterable.objects.get(kind="tag", text_ja=tag['name'])
        except:
            ctag = Filterable(
                kind='tag'
            )
        ctag.text_ja=tag['name']
        ctag.text_en=tag['name_en'] if 'name_en' in tag else ''
        ctag.text_sc=tag['name_zh_cn'] if 'name_zh_cn' in tag else ''
        ctag.text_tc=tag['name_zh_tw'] if 'name_zh_tw' in tag else ''
        ctag.save()

#heck rose val
def fix_hyperlink(desc, lang=''):
    if "hyperlink_id" in desc:
        d = desc.split('{hyperlink_id ')
        d2 = d[1].split('}')
        num = int(d2[0])
        skill = search(search(num, jsons['hyperlink'])[0]['skill_id'], jsons['skill'])[0][f'name{lang}']
        desc = d[0] + skill + d2[1]
    return desc

def import_skills(char_dict, char, index):
    s1 = []
    s2 = []
    s3 = []
    for s in char_dict["normal1_skill_ids"]:
        s1.append(search(s, jsons['skill'])[0])
    for s in char_dict["normal2_skill_ids"]:
        s2.append(search(s, jsons['skill'])[0])
    for s in char_dict["burst_skill_ids"]:
        s3.append(search(s, jsons['skill'])[0])
    s3 = s3[2:]

    skills = [s1, s2, s3]

    for skill in skills:
        fix_hyperlink(skill[0]['description'])

        name = checkName(
            text_ja=skill[0]['name'],
            text_en=skill[0]['name_en'] if 'name_en' in skill[0] else '',
            text_sc=skill[0]['name_zh_cn'] if 'name_zh_cn' in skill[0] else '',
            text_tc=skill[0]['name_zh_tw'] if 'name_zh_tw' in skill[0] else '',
            volatile=True
        )
        desc = checkDesc(
            text_ja=fix_hyperlink(skill[0]['description']),
            text_en=fix_hyperlink(skill[0]['description_en'], lang="_en")       if 'description_en'    in skill[0] else '',
            text_sc=fix_hyperlink(skill[0]['description_zh_cn'], lang="_zh_cn") if 'description_zh_cn' in skill[0] else '',
            text_tc=fix_hyperlink(skill[0]['description_zh_tw'], lang="_zh_tw") if 'description_zh_tw' in skill[0] else '',
        )
        try:
            obj = Skill.objects.get(char=char, name=name)
            print("Updating Skill", name.text_ja)
        except:
            print("Creating Skill", name.text_ja)
            obj = Skill(char=char, name=name)

        obj.name = name
        obj.desc = desc
        obj.elem = elems[skill[0]['attack_attributes'][0]]
        obj.area = area[skill[0]['skill_target_type']]
        obj.wt = skill[0]['wait']+200
        obj.index = index

        effects1 = skill[0]['effects']
        effects5 = skill[4]['effects']

        if len(effects1) >= 1:
            obj.val0 = effects1[0]['value']
            obj.val0_2 = effects5[0]['value'] if effects5[0]['value'] != obj.val0 else None
        if len(effects1) >= 2:
            obj.val1 = effects1[1]['value']
            obj.val1_2 = effects5[1]['value'] if effects5[1]['value'] != obj.val1 else None
        if len(effects1) >= 3:
            obj.val2 = effects1[2]['value']
            obj.val2_2 = effects5[2]['value'] if effects5[2]['value'] != obj.val2 else None
        if len(effects1) >= 4:
            obj.val3 = effects1[3]['value']
            obj.val3_2 = effects5[3]['value'] if effects5[3]['value'] != obj.val3 else None
        if len(effects1) >= 5:
            obj.val4 = effects1[4]['value']
            obj.val4_2 = effects5[4]['value'] if effects5[4]['value'] != obj.val4 else None
        if len(effects1) >= 6:
            obj.val5 = effects1[5]['value']
            obj.val5_2 = effects5[5]['value'] if effects5[5]['value'] != obj.val5 else None
        if len(effects1) >= 7:
            obj.val6 = effects1[6]['value']
            obj.val6_2 = effects5[6]['value'] if effects5[6]['value'] != obj.val6 else None

        obj.pow1 = skill[0]['power']
        obj.pow2 = skill[1]['power']
        obj.pow3 = skill[2]['power']
        obj.pow4 = skill[3]['power']
        obj.pow5 = skill[4]['power']

        obj.break1 = skill[0]['break_power']
        obj.break2 = skill[1]['break_power']
        obj.break3 = skill[2]['break_power']
        obj.break4 = skill[3]['break_power']
        obj.break5 = skill[4]['break_power']

        obj.save()
        index = index + 1

def import_passives(char_dict, char, num):
    passives = []
    for a in char_dict['ability_ids']:
        passives.append(search(a, jsons['ability'])[0])

    for passive in passives:
        name = checkName(
            text_ja=passive['name'],
            text_en=passive['name_en'] if 'name_en' in passive else '',
            text_sc=passive['name_zh_cn'] if 'name_zh_cn' in passive else '',
            text_tc=passive['name_zh_tw'] if 'name_zh_tw' in passive else '',
            volatile=True
        )
        desc = checkDesc(
            text_ja=passive['description'],
            text_en=passive['description_en'] if 'description_en' in passive else '',
            text_sc=passive['description_zh_cn'] if 'description_zh_cn' in passive else '',
            text_tc=passive['description_zh_tw'] if 'description_zh_tw' in passive else '',
        )
        try:
            obj = Passive.objects.get(num=num, char=char)
            print("Updating Passive", name.text_ja)
        except:
            print("Creating Passive", name.text_ja)
            obj = Passive(char=char, num=num)
        obj.name = name
        obj.desc = desc
        obj.val = passive['effects'][0]['value']
        obj.val2 = passive['effects'][1]['value'] if len(passive['effects']) > 1 else None
        obj.val3 = passive['effects'][2]['value'] if len(passive['effects']) > 2 else None
        obj.val4 = passive['effects'][3]['value'] if len(passive['effects']) > 3 else None
        obj.save()
        num = num + 1


def import_characters(event=None, additions=None):
    import_tags()
    roles = {
        1: Filterable.objects.get(text_en="Attacker", kind="role"),
        2: Filterable.objects.get(text_en="Breaker", kind="role"),
        3: Filterable.objects.get(text_en="Defender", kind="role"),
        4: Filterable.objects.get(text_en="Supporter", kind="role"),
    }
    for char in jsons['character']:
        name = checkName(
            text_ja = char["name"],
            text_en = char["name_en"] if 'name_en' in char else '',
            text_sc = char["name_zh_cn"] if 'name_zh_cn' in char else '',
            text_tc = char["name_zh_tw"] if 'name_zh_tw' in char else '',
            volatile=True
        )
        title = checkName(
            text_ja = char["another_name"],
            text_en = f'[{char["another_name_en"]}]' if "another_name_en" in char else '',
            text_sc = char["another_name_zh_cn"] if "another_name_zh_cn" in char else '',
            text_tc = char["another_name_zh_tw"] if "another_name_zh_tw" in char else '',
            volatile= True
        )
        leader_name = checkName(
            text_ja = char['leader_skill']["name"],
            text_en = char["leader_skill_en"]["name"] if "leader_skill_en" in char else '',
            text_sc = char["leader_skill_zh_cn"]["name"] if "leader_skill_zh_cn" in char else '',
            text_tc = char["leader_skill_zh_tw"]["name"] if "leader_skill_zh_tw" in char else '',
            volatile=True
        )
        leader_desc = checkDesc(
            text_ja = char['leader_skill']["description"],
            text_en = char["leader_skill_en"]["description"] if "leader_skill_en" in char else '',
            text_sc = char["leader_skill_zh_cn"]["description"] if "leader_skill_zh_cn" in char else '',
            text_tc = char["leader_skill_zh_tw"]["description"] if "leader_skill_zh_tw" in char else '',
        )
        try:
            obj = Character.objects.get(name=name, title=title)
            print('Updating', name.text_ja, title.text_ja)
            create = False
        except:
            print('Creating', name.text_ja, title.text_ja)
            try:
                add = additions[name.text_ja]
            except:
                print('Failed to add character, continuing.')
                continue
            obj = Character(slug=add)
            create = True
            if event:
                obj.limit = event

        obj.date = datetime.fromisoformat(char["start_at"]) if char["start_at"] else datetime.fromisoformat('2023-09-23T03:00:00.000Z')

        t1 = search(char['battle_tool_trait_ids'][0], jsons['battle_tool_trait'])[0]
        t2 = search(char['battle_tool_trait_ids'][1], jsons['battle_tool_trait'])[0]
        t3 = search(char['equipment_tool_trait_ids'][0], jsons['equipment_tool_trait'])[0]

        obj.name=name
        obj.title=title
        obj.hp = char['initial_status']['hp']
        obj.spd =char['initial_status']['speed']
        obj.patk=char['initial_status']['attack']
        obj.matk=char['initial_status']['magic']
        obj.pdfn=char['initial_status']['defense']
        obj.mdfn=char['initial_status']['mental']
        obj.res_ice=char['resistance']['ice']
        obj.res_fir=char['resistance']['fire']
        obj.res_imp=char['resistance']['impact']
        obj.res_ltn=char['resistance']['lightning']
        obj.res_pie=char['resistance']['piercing']
        obj.res_sla=char['resistance']['slashing']
        obj.res_wnd=char['resistance']['wind']
        obj.role=roles[char['role']]
        obj.elem=elems[char['attack_attributes'][0]]
        obj.color1=colors[char['trait_color_id']]
        obj.color2=colors[char['support_color_id']]
        obj.rarity=char['initial_rarity']
        obj.trait1=Trait.objects.get(name__text_ja=t1['name'])
        obj.trait2=Trait.objects.get(name__text_ja=t2['name'])
        obj.trait3=Trait.objects.get(name__text_ja=t3['name'])

        skill_tag = search(char['leader_skill']['abilities'][0]['condition_ids'][0],
            jsons['leader_skill_condition'])[0]['character_tag_ids']

        if len(skill_tag) > 0:
            skill_tag = Filterable.objects.get(kind="tag",
                text_ja=search(skill_tag[0], jsons['character_tag'])[0]['name'])
        else:
            skill_tag = None

        obj.leader_skill_tag = skill_tag
        obj.leader_skill_name = leader_name
        obj.leader_skill_desc = leader_desc

        obj.save()

        for tid in char['tag_ids']:
            t = search(tid, jsons['character_tag'])[0]
            tag = Filterable.objects.get(kind="tag", text_ja=t['name'])
            obj.tags.add(tag)

        if create:
            update = LatestUpdate.objects.first()
            update.characters.add(obj)

        import_skills(char, obj, 4 if char['change'] else 1)
        import_passives(char, obj, 3 if char['change'] else 1)

def import_memoria(memoria_index, event=None):
    for mem in jsons['memoria']:
        name = checkName(
            text_ja = mem["name"],
            text_en = mem["name_en"] if 'name_en' in mem else '',
            text_sc = mem["name_zh_cn"] if 'name_zh_cn' in mem else '',
            text_tc = mem["name_zh_tw"] if 'name_zh_tw' in mem else '',
            volatile=True
        )
        skills = []
        for ability in mem['ability_ids']:
            skills.append(search(ability, jsons['ability'])[0])

        skill_name = checkName(
            text_ja = skills[0]["name"],
            text_en = skills[0]["name_en"] if 'name_en' in skills[0] else '',
            text_sc = skills[0]["name_zh_cn"] if 'name_zh_cn' in skills[0] else '',
            text_tc = skills[0]["name_zh_tw"] if 'name_zh_tw' in skills[0] else '',
            volatile=True
        )
        skill_desc = checkDesc(
            text_ja = skills[0]["description"],
            text_en = skills[0]["description_en"]    if 'description_en' in skills[0] else '',
            text_sc = skills[0]["description_zh_cn"] if 'description_zh_cn' in skills[0] else '',
            text_tc = skills[0]["description_zh_tw"] if 'description_zh_tw' in skills[0] else '',
        )

        try:
            obj = Memoria.objects.get(name=name)
            print("Updating Memoria", name.text_ja)
            create = False
        except:
            print("Creating Memoria", name.text_ja)
            create = True
            obj = Memoria(slug=str(memoria_index))
            memoria_index = memoria_index + 1
            if event:
                obj.limit = event
        obj.date = datetime.fromisoformat(mem["start_at"]) if mem["start_at"] else datetime.fromisoformat('2023-09-23T03:00:00.000Z')

        obj.name = name
        obj.skill_name=skill_name
        obj.skill_desc=skill_desc
        obj.rarity=mem['rarity']
        obj.lv1=skills[0]['effects'][0]['value']/100
        obj.lv2=skills[1]['effects'][0]['value']/100
        obj.lv3=skills[2]['effects'][0]['value']/100
        obj.lv4=skills[3]['effects'][0]['value']/100
        obj.lv5=skills[4]['effects'][0]['value']/100

        obj.hp30   = search(mem['status_buffs'][0]['growth_id'],jsons['memoria_buff_growth'])[0]['values'][29]
        obj.spd30  = search(mem['status_buffs'][1]['growth_id'],jsons['memoria_buff_growth'])[0]['values'][29]
        obj.patk30 = search(mem['status_buffs'][2]['growth_id'],jsons['memoria_buff_growth'])[0]['values'][29]
        obj.matk30 = search(mem['status_buffs'][3]['growth_id'],jsons['memoria_buff_growth'])[0]['values'][29]
        obj.pdef30 = search(mem['status_buffs'][4]['growth_id'],jsons['memoria_buff_growth'])[0]['values'][29]
        obj.mdef30 = search(mem['status_buffs'][5]['growth_id'],jsons['memoria_buff_growth'])[0]['values'][29]

        obj.save()

        if create:
            update = LatestUpdate.objects.first()
            update.memoria.add(obj)

    return memoria_index

def import_material():
    for item in jsons['item']:
        name = checkName(
            text_ja = item["name"],
            text_en = item["name_en"] if 'name_en' in item else '',
            text_sc = item["name_zh_cn"] if 'name_zh_cn' in item else '',
            text_tc = item["name_zh_tw"] if 'name_zh_tw' in item else '',
            volatile=True
        )
        desc = checkDesc(
            text_ja = item["description"],
            text_en = item["description_en"]    if 'description_en' in item else '',
            text_sc = item["description_zh_cn"] if 'description_zh_cn' in item else '',
            text_tc = item["description_zh_tw"] if 'description_zh_tw' in item else '',
        )
        try:
            obj = Item.objects.get(name=name)
            print("Updating Material", name.text_ja)
            create = False
        except:
            print("Creating Material", name.text_ja)
            obj = Item(
                kind=Filterable.objects.get(slug="material"),
                slug=str(item['id'])
            )
            create = True

        obj.name = name
        obj.desc = desc
        obj.rarity = item['rarity']
        obj.save()

        try:
            obj2 = Material.objects.get(item=obj)
        except:
            obj2 = Material(item=obj)

        obj2.color = colors[item['trait_color_id']] if item['trait_color_id'] else None
        obj2.kind = item_kind[item['item_type']]
        obj2.save()

        if create:
            update = LatestUpdate.objects.first()
            update.items.add(obj)

            for t in item['battle_tool_trait_ids']:
                name = search(t, jsons['battle_tool_trait'])[0]['name']
                obj2.traits.add(Trait.objects.get(name__text_ja=name))

            for t in item['equipment_tool_trait_ids']:
                name = search(t, jsons['equipment_tool_trait'])[0]['name']
                obj2.traits.add(Trait.objects.get(name__text_ja=name))

def import_combat_items():
    prev_items = []
    for item in jsons['battle_tool']:
        name = checkName(
            text_ja = item["name"],
            text_en = item["name_en"] if 'name_en' in item else '',
            text_sc = item["name_zh_cn"] if 'name_zh_cn' in item else '',
            text_tc = item["name_zh_tw"] if 'name_zh_tw' in item else '',
            volatile=True
        )
        desc = checkDesc(
            text_ja = item["description"],
            text_en = item["description_en"]    if 'description_en' in item else '',
            text_sc = item["description_zh_cn"] if 'description_zh_cn' in item else '',
            text_tc = item["description_zh_tw"] if 'description_zh_tw' in item else '',
        )
        try:
            obj = Item.objects.get(name=name)
            print("Updating Combat Item", name.text_ja)
            create = False
        except:
            obj = Item(slug=f'usable-{item["id"]}', desc=desc)
            print("Creating Combat Item", name.text_ja)
            create = True

        obj.name = name
        if obj not in prev_items:
            obj.rarity = item['rarity']
        if not create:
            if obj.rarity == item['rarity']: # skip SR text when SSR exists
                obj.desc = desc
        obj.kind=Filterable.objects.get(slug="combat", kind="item_type")
        obj.save()

        try:
            obj2 = CombatItem.objects.get(item=obj)
        except:
            obj2 = CombatItem(item=obj)

        obj2.kind = combat_kind[item['trait_filter_ids'][0]]
        if len(item['attack_attributes']) > 0:
            obj2.elem = elems[item['attack_attributes'][0]]
        obj2.uses = item['usage_count']

        skill = search(item['skill_id'], jsons['skill'])[0]
        obj2.area = area[skill['skill_target_type']]

        if obj in prev_items:
            obj2.pow_bad = skill['power']
            obj2.val_bad = skill['effects'][0]['value'] if len(skill['effects']) > 0 else 0
            obj2.val2_bad = skill['effects'][1]['value'] if len(skill['effects']) > 1 else None
        else:
            obj2.pow_good = skill['power']
            obj2.val_good = skill['effects'][0]['value'] if len(skill['effects']) > 0 else 0
            obj2.val2_good = skill['effects'][1]['value'] if len(skill['effects']) > 1 else None
        obj2.save()
        prev_items.append(obj)

        if create:
            update = LatestUpdate.objects.first()
            update.items.add(obj)

def import_equipment():
    prev_item = []
    for item in jsons['equipment_tool']:
        name = checkName(
            text_ja = item["name"],
            text_en = item["name_en"] if 'name_en' in item else '',
            text_sc = item["name_zh_cn"] if 'name_zh_cn' in item else '',
            text_tc = item["name_zh_tw"] if 'name_zh_tw' in item else '',
            volatile=True
        )
        desc = checkDesc(
            text_ja = item["description"],
            text_en = item["description_en"]    if 'description_en' in item else '',
            text_sc = item["description_zh_cn"] if 'description_zh_cn' in item else '',
            text_tc = item["description_zh_tw"] if 'description_zh_tw' in item else '',
        )



        try:
            obj = Item.objects.get(name=name)
            print("Updating Equipment", name.text_ja)
            create = False
        except:
            obj = Item(slug=f'equip-{item["id"]}', desc=desc)
            print("Creating Equipment", name.text_ja)
            create = True

        obj.name = name
        if obj not in prev_item:
            obj.rarity = item['rarity']
        if not create:
            if obj.rarity == item['rarity']: # skip SR text when SSR exists
                obj.desc = desc
        obj.kind = Filterable.objects.get(slug="equipment", kind="item_type")
        obj.save()

        try:
            obj2 = Equipment.objects.get(item=obj)
        except:
            obj2 = Equipment(item=obj)

        obj2.kind=equip_kind[item['slot_type']]

        if item['ability_ids']:
            ability = search(item['ability_ids'][0], jsons['ability'])[0]
            if obj in prev_item:
                obj2.val_bad  = ability['effects'][0]['value']
                obj2.val2_bad = ability['effects'][1]['value'] if len(ability['effects']) > 1 else None
            else:
                obj2.val_good  = ability['effects'][0]['value']
                obj2.val2_good = ability['effects'][1]['value'] if len(ability['effects']) > 1 else None

        for stat in item['status_buffs']:
            if obj not in prev_item:
                match stat['status_type']:
                    case 1:
                        obj2.good_hp   = stat['value']
                    case 2:
                        obj2.good_spd  = stat['value']
                    case 3:
                        obj2.good_patk = stat['value']
                    case 4:
                        obj2.good_matk = stat['value']
                    case 5:
                        obj2.good_pdef = stat['value']
                    case 6:
                        obj2.good_mdef = stat['value']
            else:
                match stat['status_type']:
                    case 1:
                        obj2.bad_hp    = stat['value']
                    case 2:
                        obj2.bad_spd   = stat['value']
                    case 3:
                        obj2.bad_patk  = stat['value']
                    case 4:
                        obj2.bad_matk  = stat['value']
                    case 5:
                        obj2.bad_pdef  = stat['value']
                    case 6:
                        obj2.bad_mdef  = stat['value']

        obj2.save()

        if create:
            update = LatestUpdate.objects.first()
            update.items.add(obj)
        prev_item.append(obj)

def import_recipes():
    rStory = RecipeTab.objects.get(order=1)
    rTower = RecipeTab.objects.get(order=2)
    rEvent = RecipeTab.objects.get(order=3)
    for recipe in jsons['recipe']:
        item = Item.objects.get(name__text_ja=recipe['name'])
        plan = search(recipe['recipe_plan_id'], jsons['recipe_plan'])[0]

        limited = checkDesc(
            text_ja=plan['name'],
            text_en=plan['name_en']    if 'name_en' in plan    else plan['name'],
            text_sc=plan['name_zh_cn'] if 'name_zh_cn' in plan else plan['name'],
            text_tc=plan['name_zh_tw'] if 'name_zh_tw' in plan else plan['name'],
        )
        tab = rStory
        if plan['recipe_plan_category_id'] == 2:
            tab = rEvent
        if plan['recipe_plan_category_id'] == 3:
            tab = rTower

        try:
            rPage = RecipePage.objects.get(book=recipe['recipe_plan_id'])
        except:
            print("Page Created", recipe['recipe_plan_id'])
            rPage = RecipePage(
                book=recipe['recipe_plan_id'],
                tab=tab,
                desc=limited,
            )
            if plan['recipe_plan_category_id'] == 2:
                for i in LatestUpdate.objects.first().items:
                    if i.rarity == 4 or i.kind.slug == 'material':
                        i.limit = limited
                        i.save()
        rPage.save()

        unlock1 = checkDesc(
            text_ja = recipe['requirements'][0]['name'] if len(recipe['requirements']) > 0 else None,
            text_en = recipe['requirements_en'][0]['name']  if len(recipe['requirements']) > 0 and 'requirements_en' in recipe else '',
            text_sc = recipe['requirements_zh_cn'][0]['name']  if len(recipe['requirements']) > 0 and 'requirements_zh_cn' in recipe else '',
            text_tc = recipe['requirements_zh_tw'][0]['name']  if len(recipe['requirements']) > 0 and 'requirements_zh_tw' in recipe else '',
        )

        unlock2 = checkDesc(
            text_ja = recipe['requirements'][1]['name'] if len(recipe['requirements']) > 1 else None,
            text_en = recipe['requirements_en'][1]['name']  if len(recipe['requirements']) > 1 and 'requirements_en' in recipe else '',
            text_sc = recipe['requirements_zh_cn'][1]['name']  if len(recipe['requirements']) > 1 and 'requirements_zh_cn' in recipe else '',
            text_tc = recipe['requirements_zh_tw'][1]['name']  if len(recipe['requirements']) > 1 and 'requirements_zh_tw' in recipe else '',
        )

        unlock3 = checkDesc(
            text_ja = recipe['requirements'][2]['name'] if len(recipe['requirements']) > 2 else None,
            text_en = recipe['requirements_en'][2]['name']  if len(recipe['requirements']) > 2 and 'requirements_en' in recipe else '',
            text_sc = recipe['requirements_zh_cn'][2]['name']  if len(recipe['requirements']) > 2 and 'requirements_zh_cn' in recipe else '',
            text_tc = recipe['requirements_zh_tw'][2]['name']  if len(recipe['requirements']) > 2 and 'requirements_zh_tw' in recipe else '',
        )

        try:
            obj = Recipe.objects.get(item=item)
            print("Updating Recipe", item.name.text_ja)
        except Recipe.DoesNotExist:
            print("Creating Recipe", item.name.text_ja)
            obj = Recipe(item=item)

        obj.page=rPage
        obj.order=recipe['id']
        obj.book=recipe['recipe_plan_id']
        obj.color1=colors[recipe['support_color_ids'][0]]
        obj.color2=colors[recipe['support_color_ids'][1]]
        obj.color3=colors[recipe['support_color_ids'][2]]
        obj.unlock1=unlock1
        obj.unlock2=unlock2
        obj.unlock3=unlock3
        obj.quant1=recipe['ingredient_costs'][0]['quantity']
        obj.quant2=recipe['ingredient_costs'][1]['quantity'] if len(recipe['ingredient_costs']) > 1 else None
        obj.quant3=recipe['ingredient_costs'][2]['quantity'] if len(recipe['ingredient_costs']) > 2 else None
        obj.ing1=Item.objects.get(name__text_ja=search(recipe['ingredient_costs'][0]['id'], jsons['item'])[0]['name'])
        obj.ing2=Item.objects.get(name__text_ja=search(recipe['ingredient_costs'][1]['id'], jsons['item'])[0]['name']) if len(recipe['ingredient_costs']) > 1 else None
        obj.ing3=Item.objects.get(name__text_ja=search(recipe['ingredient_costs'][2]['id'], jsons['item'])[0]['name']) if len(recipe['ingredient_costs']) > 2 else None
        obj.save()

        if plan['recipe_plan_category_id'] == 2:
            item.limit = limited
            item.save()
            if obj.ing1:
                obj.ing1.limit = limited
                obj.ing1.save()
            if obj.ing2:
                obj.ing2.limit = limited
                obj.ing2.save()
            if obj.ing3:
                obj.ing3.limit = limited
                obj.ing3.save()



def get_quest_name(quest):
    name = checkName(
        text_ja=quest['name'],
        text_en=quest['name_en'] if 'name_en' in quest else '',
        text_sc=quest['name_zh_cn'] if 'name_zh_cn' in quest else '',
        text_tc=quest['name_zh_tw'] if 'name_zh_tw' in quest else '',
        volatile=True
    )
    return name

def GetReward(reward, order):
    item = search(reward['id'], jsons['item'])[0]['name']
    obj = Reward(
        item=Item.objects.get(name__text_ja=item),
        order=order,
        num=reward['quantity'] if 'quantity' in reward else None
    )
    obj.save()
    return obj

def get_floor_effects(ability_ids):
    effects = []
    for aid in ability_ids:
        ability = search(aid, jsons['ability'])[0]
        eff = checkDesc(
            text_ja=ability['description'],
            text_en=ability['description_en'] if 'description_en' in ability else '',
            text_sc=ability['description_zh_cn'] if 'description_zh_cn' in ability else '',
            text_tc=ability['description_zh_tw'] if 'description_zh_tw' in ability else '',
        )
        effects.append(eff)
    return effects

def import_score_battle(quest, difficulty, chapter, section):
    if difficulty != quest['difficulty']:
        if difficulty == 3:
            chapter = chapter + 1
        difficulty = quest['difficulty']
        section = 1

    print('score battle', quest['name'], f'{chapter}-{section} {difficulty}')

    try:
        sb = ScoreBattle.objects.get(chap=chapter, sect=section)
        get_quest_name(quest)
    except:
        sb = ScoreBattle(
            name=get_quest_name(quest),
            chap=chapter,
            sect=section
        )
        sb.save()

    obj = sb.difficulties.filter(difficulty=difficulty)

    reward = search(quest['score_battle']['ranks'][4]['reward_set_ids'][0], jsons['reward_set'])[0]['rewards']

    if len(obj) == 0:
        print("New difficulty")
        obj = ScoreBattleDifficulties(
            combat_level=quest['recommended_combat_power'],
            exp=quest['character_exp'],
            q_id=quest['id'],
            difficulty=difficulty,
            cole=reward[0]['quantity']
        )
        obj.save()

        for i in range(1,len(reward)):
            obj.rewards.add(GetReward(reward[i], i))
        sb.difficulties.add(obj)

    section = section + 1
    return difficulty, chapter, section

def wave(data, order):
    try:
        wave = Wave.objects.get(w_id=data['id'])
    except:
        wave = Wave(
            w_id=data['id']
        )
    wave.order = order
    wave.level = data['enemies'][0]['level']
    wave.save()

    for o in data['enemies']:
        enemy = Enemy.objects.get(e_id=o['id'])
        if enemy not in wave.enemies.all():
            wave.enemies.add(enemy)
    return wave

def battle(id):
    battle_data = search(id, jsons['battle'])[0]
    try:
        obj = Battle.objects.get(b_id=id)
    except:
        obj = Battle(
            b_id=id
        )
        obj.save()

        count = 1;
        for b in battle_data['wave_ids']:
            obj.waves.add(wave(search(b, jsons['wave'])[0], count))
            count = count + 1

        for p in battle_data['display_timeline_panel_ids']:
            if p != 11: # 11 is blank/default
                obj.panels.add(Filterable.objects.get(
                    kind="panel",
                    text_ja=search(p, jsons['timeline_panel'])[0]['name']))

        for id in battle_data['hint_ids']:
            hint = search(id, jsons['battle_hint'])[0]
            desc = checkDesc(
                text_ja=hint['description'].replace('\r', '').replace('\n', '<br>'),
                text_en=hint['description_en'].replace('\r', '').replace('\n', '<br>') if 'description_en' in hint else '',
                text_sc=hint['description_zh_cn'].replace('\r', '').replace('\n', '<br>') if 'description_zh_cn' in hint else '',
                text_tc=hint['description_zh_tw'].replace('\r', '').replace('\n', '<br>') if 'description_zh_tw' in hint else '',
            )
            e = Enemy.objects.get(e_id=hint['enemy_id'])
            try:
                h = Hint.objects.get(enemy=e, desc=desc)
            except:
                h = Hint(enemy=e, desc=desc)
                h.save()
                obj.hints.add(h)
    return obj


def import_tower(quest, kind):
    print(quest['name'], kind)
    floor=int(quest['name'].split('階')[0])
    kind=Filterable.objects.get(slug=kind)
    effects = get_floor_effects(quest['field_ability_ids'])
    try:
        obj = Tower.objects.get(floor=floor, kind=kind)
    except:
        print('Create new floor')
        obj = Tower(
            floor=floor,
            kind=kind,
            q_id=quest['id'],
            combat_level=quest['recommended_combat_power'],
        )
        obj.battle = battle(quest['battle_id'])
        obj.save()

        reward = None
        if quest['first_clear_reward_set_id']:
            reward = search(quest['first_clear_reward_set_id'], jsons['reward_set'])[0]['rewards']

        if len(reward) > 1:
            for i in range(1, len(reward)):
                obj.rewards.add(GetReward(reward[i], i))

        for e in effects:
            obj.effects.add(e)


def import_dungeon(quest):
    heck = {
        "I]": 1,
        "II]": 2,
        "III]": 3,
        "IV]": 4,
        "V]": 5,
        "VI]": 6,
        "VII]": 7,
        "VIII]": 8,
        "IX]": 9,
        "X]": 10,
    }
    print('dungeon', quest['name'])
    floor = heck[quest['name'].split('：')[1]]
    name = checkName(
        text_ja = quest['name'].split('[')[0],
        text_en = quest['name_en'].split(' [Risk ')[0] if 'name_en' in quest else '',
        text_sc = quest['name_zh_cn'].split('[')[0] if 'name_zh_cn' in quest else '',
        text_tc = quest['name_zh_tw'].split('[')[0] if 'name_zh_tw' in quest else '',
        volatile= True
    )
    effects = get_floor_effects(quest['field_ability_ids'])
    try:
        dun=Dungeon.objects.get(name=name)
    except:
        print("Creating new dungeon.")
        dun=Dungeon(
            name=name
        )
        dun.save()
    try:
        obj = DungeonFloor.objects.get(dungeon=dun, order=floor)
    except:
        print("Floor", floor)
        obj = DungeonFloor(
            dungeon=dun,
            order=floor,
            combat_level=quest['recommended_combat_power'],
            q_id=quest['id']
        )
        obj.save()

        for e in effects:
            obj.effects.add(e)

        # If redoing earlier floors, needs a floor 1 check as well
        for i in range(0, len(quest['sample_rewards'])):
            r = GetReward(quest['sample_rewards'][i], i+1)
            if floor == 9:
                dun.rewards.add(r)

def import_quest():
    count = 0
    difficulty = 1
    chapter = 1
    section = 1

    for quest in jsons['quest']:
        if quest['id'] >= 204100000 and quest['id'] < 204200000 and quest['skippable_type'] != 1:
            difficulty, chapter, section = import_score_battle(quest, difficulty, chapter, section)
            count = count + 1
        if quest['id'] >= 204200000 and quest['id'] < 204300000  and quest['skippable_type'] != 1:
            import_dungeon(quest)
            count = count + 1
        if quest['id'] >= 301000000 and quest['id'] < 302000000:
            import_tower(quest, 'elemental-tower')
            count = count + 1
        if quest['id'] >= 302000000 and quest['id'] < 303000000:
            import_tower(quest, 'slash')
            count = count + 1
        if quest['id'] >= 303000000 and quest['id'] < 304000000:
            import_tower(quest, 'impact')
            count = count + 1
        if quest['id'] >= 304000000 and quest['id'] < 305000000:
            import_tower(quest, 'pierce')
            count = count + 1
        if quest['id'] >= 305000000 and quest['id'] < 306000000:
            import_tower(quest, 'fire')
            count = count + 1
        if quest['id'] >= 306000000 and quest['id'] < 307000000:
            import_tower(quest, 'ice')
            count = count + 1
        if quest['id'] >= 307000000 and quest['id'] < 308000000:
            import_tower(quest, 'lightning')
            count = count + 1
        if quest['id'] >= 308000000 and quest['id'] < 309000000:
            import_tower(quest, 'wind')
            count = count + 1
    print(count)

def import_emblem():
    for emb in jsons['emblem']:
        name = checkName(
            text_ja = emb['name'],
            text_en = emb['name_en'] if 'name_en' in emb else '',
            text_sc = emb['name_zh_cn'] if 'name_zh_cn' in emb else '',
            text_tc = emb['name_zh_tw'] if 'name_zh_tw' in emb else '',
            volatile= True
        )

        desc = checkDesc(
            text_ja=emb['effect_name'],
            text_en=emb['effect_name_en'] if 'effect_name_en' in emb else '',
            text_sc=emb['effect_name_zh_cn'] if 'effect_name_zh_cn' in emb else '',
            text_tc=emb['effect_name_zh_tw'] if 'effect_name_zh_tw' in emb else '',
        )

        try:
            obj = Emblem.objects.get(index=emb['priority'], eid=emb['id'])
            print("Updating Emblem", name.text_ja)
        except:
            print("Creating Emblem", name.text_ja)
            obj = Emblem(
                index=emb['priority'],
                eid=emb['id'],
                kind=emb['emblem_group_id']
            )
        obj.name = name
        obj.desc = desc

        rarities = search(emb['id'], jsons['emblem_rarity'], 'emblem_id')

        obj.lv1 = rarities[0]['value']
        obj.lv2 = rarities[1]['value']
        obj.lv3 = rarities[2]['value']

        acquisitions = []

        for r in rarities:
            gbl = False
            if 'requirement_en' in r:
                gbl = True
            acquisition = checkDesc(
                text_ja=r['requirement']['name'],
                text_en=r['requirement_en']['name'] if gbl else '',
                text_sc=r['requirement_zh_cn']['name'] if gbl else '',
                text_tc=r['requirement_zh_tw']['name'] if gbl else '',
            )
            acquisitions.append(acquisition)

        obj.acquisition1=acquisitions[0]
        obj.acquisition2=acquisitions[1]
        obj.acquisition3=acquisitions[2]

        obj.save()

def enemy_skill(id, kind):
    skill = search(id, jsons['skill'])[0]
    name = checkName(
        volatile=True,
        text_ja=skill['name'],
        text_en=skill['name_en'] if 'name_en' in skill else '',
        text_sc=skill['name_zh_cn'] if 'name_zh_cn' in skill else '',
        text_tc=skill['name_zh_tw'] if 'name_zh_tw' in skill else '',
    )
    desc = None
    if skill['description'] != 'テキストなし':
        desc = checkDesc(
            text_ja=skill['description'],
            text_en=skill['description_en'] if 'description_en' in skill else '',
            text_sc=skill['description_zh_cn'] if 'description_zh_cn' in skill else '',
            text_tc=skill['description_zh_tw'] if 'description_zh_tw' in skill else '',
    )
    try:
        obj = EnemySkill.objects.get(s_id=id)
    except:
        obj = EnemySkill(
            s_id=id
        )
    obj.name = name
    obj.desc = desc
    obj.elem = elems[skill['attack_attributes'][0]] if len(skill['attack_attributes']) > 0 else None
    obj.area = area[skill['skill_target_type']] if skill['skill_target_type'] != 1 else None
    obj.wt = skill['wait']
    obj.pow1 = skill['power']
    obj.save()

    try:
        sk = SkillKind.objects.get(kind=kind, skill=obj)
    except:
        sk = SkillKind(
            kind=kind,
            skill=obj
        )
        sk.save()
    return sk

def import_enemy(base_enemy_index):
    for enemy in jsons['enemy']:
        create = False
        name = checkName(
            text_ja = enemy['name'],
            text_en = enemy['name_en'] if 'name_en' in enemy else '',
            text_sc = enemy['name_zh_cn'] if 'name_zh_cn' in enemy else '',
            text_tc = enemy['name_zh_tw'] if 'name_zh_tw' in enemy else '',
            volatile= True
        )
        base = search(enemy['base_enemy_id'], jsons['base_enemy'])[0]
        species = search(base['species_id'], jsons['species'])[0]
        species = checkName(
            volatile=True,
            text_ja=species['name'],
            text_en=species['name_en'] if 'name_en' in species else '',
            text_sc=species['name_zh_cn'] if 'name_zh_cn' in species else '',
            text_tc=species['name_zh_tw'] if 'name_zh_tw' in species else '',
        )
        try:
            base_enemy=Filterable.objects.get(text_ja=base['name'], kind='base-enemy')
        except:
            base_enemy=Filterable(
                slug=f'base-enemy-{base_enemy_index}',
                text_ja=base['name'],
                text_en=base['name_en'] if 'name_en' in base else '',
                text_sc=base['name_zh_cn'] if 'name_zh_cn' in base else '',
                text_tc=base['name_zh_tw'] if 'name_zh_tw' in base else '',
                kind='base-enemy'
            )
            base_enemy.save()
            base_enemy_index = base_enemy_index + 1

        try:
            obj = Enemy.objects.get(e_id=enemy['id'])
            print("Updating Enemy", enemy['name'])
        except:
            obj = Enemy(
                e_id=enemy['id'],
            )
            create = True
            print("New Enemy", enemy['name'])
        obj.res_ice=enemy['resistance']['ice']
        obj.res_fir=enemy['resistance']['fire']
        obj.res_str=enemy['resistance']['impact']
        obj.res_blt=enemy['resistance']['lightning']
        obj.res_sta=enemy['resistance']['piercing']
        obj.res_sla=enemy['resistance']['slashing']
        obj.res_air=enemy['resistance']['wind']
        obj.base_enemy=base_enemy
        obj.species=species
        obj.name=name
        obj.save()

        ai_unit = search(enemy['enemy_ai_id'], jsons['enemy_ai_unit'], 'enemy_ai_id')
        uniques = []

        for a in ai_unit:
            for s in a['skills']:
                if s['id'] not in uniques:
                    uniques.append(s['id'])

        burst = enemy_skill(enemy['burst_skill_id'], 'burst')
        extra = [enemy_skill(x, 'extra') for x in enemy['extra_skill_ids']]
        normal = [enemy_skill(x, 'normal') for x in uniques]

        if create:
            obj.skills.add(burst)
            for o in extra:
                obj.skills.add(o)
            for o in normal:
                obj.skills.add(o)

    return base_enemy_index


def scan_update_images():
    update = LatestUpdate.objects.first()
    material_dict = jsons['item']
    equip_dict = jsons['equipment_tool']
    battle_dict = jsons['battle_tool']
    for item in update.items.all():
        if item.kind.text_en == 'Material':
            im = search(item.name.text_ja, material_dict, 'name')[0]['large_still_path_hash']
            print(item.slug, jsons['path_hash_to_name'][im])
        elif item.kind.text_en == 'Equipment':
            im = search(item.name.text_ja, equip_dict, 'name')[0]['still_path_hash']
            print(item.slug, jsons['path_hash_to_name'][im])
        else:
            im = search(item.name.text_ja, battle_dict, 'name')[0]['still_path_hash']
            print(item.slug, jsons['path_hash_to_name'][im])
    for memoria in update.memoria.all():
        im = search(memoria.name.text_ja, jsons['memoria'], 'name')[0]['still_path_hash']
        print(memoria.slug, jsons['path_hash_to_name'][im])
    for character in update.characters.all():
        im = search(character.title.text_ja, jsons['character'], 'another_name')[0]['large_still_path_hash']
        print(character.slug, jsons['path_hash_to_name'][im])
        im = search(character.title.text_ja, jsons['character'], 'another_name')[0]['large_narrow_still_path_hash']
        print(character.slug, jsons['path_hash_to_name'][im])

def enemy_images():
    for e in jsons['base_enemy']:
        print(Filterable.objects.get(kind='base-enemy', text_ja=e['name']).slug,
              jsons['path_hash_to_name'][e['large_still_path_hash']])


def global_additions():
    createUpdateGBL()
    update = LatestUpdateGBL.objects.first()

    rStory = RecipeTab.objects.get(order=1)
    rTower = RecipeTab.objects.get(order=2)

    dungeons = [] #["Spiral into Another World", "Bottomless Pit"]
    score_battle_chapter = None
    tower_floor_max = None
    elem_tower_floor_max = None
    events = [] #['アトリエサマー第1弾 LEGEND FES', 'アトリエサマー2024 第1弾']
    recipe_pages = [] #[[rStory, 44], [rStory, 45]] # refer to recipepage db for numbers
    traits = []

    if tower_floor_max:
        towers = Tower.objects.filter(kind=Filterable.objects.get(text_en="Elemental Tower"))
        for tower in towers:
            if tower.floor <= tower_floor_max and not tower.gbl:
                tower.gbl = True
                tower.save()
                print(tower.kind.text_en, tower.floor)
    if elem_tower_floor_max:
        towers = Tower.objects.exclude(kind=Filterable.objects.get(text_en="Elemental Tower"))
        for tower in towers:
            if tower.floor <= elem_tower_floor_max and not tower.gbl:
                tower.gbl = True
                tower.save()
                print(tower.kind.text_en, tower.floor)
    if score_battle_chapter:
        score_battles = ScoreBattle.objects.filter(chapter=score_battle_chapter)
        for sb in score_battles:
            sb.gbl = True
            sb.save()
            for diff in sb.difficulties.all():
                for reward in diff.rewards.all():
                    if not reward.item.gbl:
                        reward.item.gbl = True
                        reward.item.save()
                        print("Score Battle Reward", sb.chapter, sb.section, diff.difficulty, reward.item.name.text_en, reward.item.name.text_ja)
                        update.items.add(reward.item)
    for dungeon in dungeons:
        n = Name.objects.get(text_en=dungeon)
        dun = Dungeon.objects.get(name=n)
        for reward in dun.rewards.all():
            if not reward.item.gbl:
                print("Dungeon Reward", reward.item.name.text_en, reward.item.name.text_ja)
                reward.item.gbl = True
                reward.item.save()
                update.items.add(reward.item)
        dun.gbl=True
        dun.save()
    for trait in traits:
        t = Trait.objects.get(name__text_en=trait)
        t.gbl=True
        t.save()

    for page in recipe_pages:
        p = RecipePage.objects.get(book=page[1], tab=page[0])
        for recipe in p.recipe_set.all():
            print("Item GBL (recipe):", recipe.item.name.text_en, recipe.item.name.text_ja)
            recipe.item.gbl = True
            recipe.item.save()
            update.items.add(recipe.item)
        p.gbl = True
        p.save()

    for event in events:
        ev = Desc.objects.get(text_ja=event)
        try:
            page = RecipePage.objects.get(desc=ev)
            print("Page GBL:", ev.text_en)
            page.gbl = True
            page.save()
            recipes = Recipe.objects.filter(page=page)
            for recipe in recipes:
                if recipe.item.name.text_sc:
                    print("Item GBL:", recipe.item.name.text_en, recipe.item.name.text_ja)
                    recipe.item.gbl = True
                    recipe.item.save()
                    update.items.add(recipe.item)
        except:
            pass

        items = Item.objects.filter(limit=ev)
        for item in items:
            if not item.gbl and item.name.text_sc:
                print("Item GBL:", item.name.text_en, item.name.text_ja)
                item.gbl = True
                item.save()
                update.items.add(item)

        memoria = Memoria.objects.filter(limit=ev)
        for mem in memoria:
            print("Memoria GBL:", mem.name.text_en)
            mem.gbl = True
            mem.save()
            update.memoria.add(mem)

        characters = Character.objects.filter(limit=ev)
        for char in characters:
            print("Character GBL:", char.name.text_en, char.title.text_en)
            char.gbl = True
            char.save()
            update.characters.add(char)

def create_event(ja, en='', sc='', tc=''):
    if not sc:
        sc = ja
        tc = ja
    if not en:
        en = ja
    return checkDesc(en, ja, sc, tc)

# I wrote this intending on removing duds but there aren't actually too many of them
def cleanup():
    bad = Desc.objects.filter(character__isnull=True, dungeonfloor__isnull=True, enemyskill__isnull=True, hint__isnull=True, item__isnull=True, item_limited__isnull=True, leader_desc__isnull=True, memoria__isnull=True, memoria_limited__isnull=True, passive__isnull=True, recipepage__isnull=True, req__isnull=True, research__isnull=True, skill__isnull=True, tower__isnull=True, trait__isnull=True, unlock1__isnull=True, unlock2__isnull=True, unlock3__isnull=True)
    for b in bad:
        print(b.text_en, b.text_ja)

# for setting slugs
additions = {
    "フロッケ": "flocke-2"
}
memoria_index = 121 # 1st anni heidi/flocke
base_enemy_index = 84

gacha = None #create_event(ja='1周年 星礼祭 LEGEND FES かけがえのないモノ', en="1st Anniversary Part 8")

#createUpdate()
#retrieve_all_jsons()
#import_combat_traits()
#import_equipment_traits()
#import_characters(event=gacha, additions=additions)
#memoria_index = import_memoria(memoria_index, event=gacha)
#import_material()
#import_combat_items()s
#import_equipment()
#import_recipes()
#base_enemy_index = import_enemy(base_enemy_index)
#import_quest()
#import_emblem()
#scan_update_images()
#print(f'Memoria: {memoria_index}\tEnemy: {base_enemy_index}')

#global_additions()
#enemy_images()
#import_research()

"""
python manage.py dumpdata chara_a25 items_a25 misc_a25 misc_a25 quest_a25 -o dump.json.gz
"""
