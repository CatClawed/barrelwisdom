---
title: "Advanced Mechanics"
pubDate: "2021-06-25"
updatedDate: "2024-11-14"
description: "High end mechanics data for all your ultimate building needs."
---

This section courtesy of whimsic_al.

You don't need to read this unless you're SUPER DUPER INTERESTED.

A fun quirk is that infinite turns were nerfed after the PS3 version. So you can build for that in the original version, but not the others.

## Damage

Have a formula:

* Item Damage = Base Effect * Effect Power Scaling * Property Bonuses * Crit Power * Skill/Item Power * [Heroic Bonus](/shallie/properties/heroic-soul/en) * (1 + Burst Power * Chain Bonus) * Level Bonus Multiplier
  * For other kinds of damage, kill the property bonuses and effect power scaling. There is a little more to it, but the values are unknown.
  * Attack items have an additional problem; multiply them by 1/n, where n = the number of uses. So your first time, nothing changes. The second time, it's halved. Etc. This applies even if you use different copies of the same item.
  * Timecards will have the same effect throughout, but use the item again and the timecards are replaced with weaker ones.
  * See next section for level information.

But let's have an example:

* [Talisman of Ancient Beasts](/shallie/items/talisman-of-ancient-beasts/en) ([PSE](/shallie/properties/property-super-enhance/en) / [JB](/shallie/properties/jumbo-blessing/en) / [BKB](/shallie/properties/beast-king-s-blade/en))
* "Vanilla" maxed Stera with crit/level buffs. (What's "vanilla"? See [this](/shallie/ultimate-build-discussion) section. The short is that it's unspecialized, but powerful.)
* Jurie and Solle Field Bursts
* Lamlost (0 defense), hit once to Burst/Break
* =(1276+325) x 2.195 x 2.64  x 2.4 x 2.07 x 1.08 x (1 + 1.5  x 1.179) x 3.284 = (1276+325)*202 = 450k
* ...But that's not quite right, as the game is fond of rounding. It's likely closer to 420K.

<table class="tbl-min borders">
<tr><th colspan=2> Effect Power Scaling </th><th colspan=2> Chain Bonus </th></tr>
<tr><td>Effect </td><td>Multiplier </td><td>Chain </td><td>Multiplier</td></tr>
<tr><td> 0 </td><td> 0.75 </td><td>                         0 </td><td> 1.179 </td></tr>
<tr><td> 50  </td><td> 1.0 </td><td>                        1 </td><td> 1.356 </td></tr>
<tr><td> 100 </td><td> 1.268 </td><td>                      2 </td><td> 1.437 </td></tr>
<tr><td> 200 </td><td> 1.561 </td><td>                      3 </td><td> 1.497 </td></tr>
<tr><td> 300 </td><td> 1.695 </td><td>                      4 </td><td> 1.542 </td></tr>
<tr><td> 400 </td><td> 1.793 </td><td>                      5 </td><td> 1.591 </td></tr>
<tr><td> 500 </td><td> 1.878 </td><td>                     10 </td><td> 1.768 </td></tr>
<tr><td> 600 </td><td> 1.951 </td><td>                     20 </td><td> 2.002 </td></tr>
<tr><td> 700 </td><td> 2.024 </td><td>                     30 </td><td> 2.192 </td></tr>
<tr><td> 800 </td><td> 2.085 </td><td>                     40 </td><td> 2.356 </td></tr>
<tr><td> 900 </td><td> 2.146 </td><td>                     50 </td><td> 2.486 </td></tr>
<tr><td> 980 </td><td> 2.183 </td><td>                    100 </td><td> 3.038 </td></tr>
<tr><td rowspan=6> 999 </td><td rowspan=6> 2.195 </td><td>                150 </td><td> 3.454 </td></tr>
              </td><td>                    200 </td><td> 3.806 </td></tr>
              </td><td>                    300 </td><td> 4.394 </td></tr>
              </td><td>                    500 </td><td> 5.339 </td></tr>
              </td><td>                    750 </td><td> 6.281 </td></tr>
              </td><td>                   1000 </td><td> 7.072 </td></tr>
</table>

* Property Bonus:
  * PSE/ JB / [HCE](/shallie/properties/high-cost-enhance/en) (9 slots): 3.30 (maximum property bonus, outside [LDP](/shallie/properties/legend-destruct-power/en) and crits)
  * PSE / [CB](/shallie/properties/cost-bonus/en) / JB (9 slots): 3.23
  * JB / PSE / Tier Zero property such as BKB (9 slots): 2.64
  * JB/HCE/tier zero (9 slots): 2.62
  * PSE / CB / top tier such as [Soul Dwelling](/shallie/properties/soul-dwelling/en) (1 slot): 2.32
  * PSE / [Mach Throw](/shallie/properties/mach-throw/en) / Tier Zero, such as a [Carries Heat](/shallie/properties/carries-heat/en) bomb (1 slot): 1.62

Item properties add effects to items that follow the same scaling/stacking/caps as effects natively found on items. They apply after main effects.
Some effects are capped at 100% bonus from properties. PSE/CB and a 1 slot can hit the cap for these, and JB/HCE are unnecessary.

## Buffs/Debuffs

Generally last 5 turns, unless specified otherwise. Unlike attack items (on No Hope difficulty), these do not suffer diminishing returns upon repeated use,
so feel free to debuff as much as you wish without penalty. However, buffs from skills and buffs from items do not stack; they will replace each other.
Generally, avoid the skill buffs.

Buffs on KO revival items do not apply to KOed allies. They'll just revive without the buff. This mainly applies to auto-Elixirs, but you'll see it happen.

"Level" increasing buffs from items increase expected damage, as well as attack and speed by 3x the level. (No influence on defense at all.) They stack with regular attack/speed buffs, and they stack additively with equipment level bonuses (such as from [Feather Ornament](/shallie/items/feather-ornament/en), [Mirage Talisman](/shallie/items/mirage-talisman/en), [Thunder Outfit](/shallie/items/thunder-outfit/en) and the property [Awakened Soul](/shallie/properties/awakened-soul/en).
Level debuffs, as you'd expect, decrease expected damage, attack, and speed. Attack/Speed are decreased by 3x the level debuff.

Level buffs on equipment just increase expected damage. Which is still amazing in practice.

Just as an example, if you had Awakened Soul on at level 1, your items would do damage as if you were level 33. You can guess what that does to your attack and speed; it's
actually a bigger increase than if you were to level to 33. Damage increases ~1.5% per level. For instance, Soul Dwelling adds 42 levels and ~61% damage.

* Let's stack!
  * [Ultimate Growth](/shallie/effects/ultimate-growth/en) ([Thunder Outfit](/shallie/items/thunder-outfit/en)), [Soul Evolution](/shallie/effects/soul-evolution/en) ([Mirage Talisman](/shallie/items/mirage-talisman/en)), [Awakened Soul](/shallie/properties/awakened-soul/en) (armor property), [Soul Dwelling](/shalile/properties/soul-dwelling) (item property) = 228% damage (multiplier in damage formula is 3.28)
  * All of the above, minus Soul Evolution = 191% (2.91 multiplier). Hence, Mirage Talisman adds 37% damage at most, and this effect is less than skill power effects from some other items.

## Equipment Effects

All equipment effects of any type stack additively, including quick chance. They also stack additively with item/skill effects and passives.

* Caps
  * Stats: 999
    * Attack and Defense suffer diminishing returns.
  * Crit chance: 100%
  * Crit power: +100%
    * Cap can be exceeded in some cases.
    * The first is Solle's Field Burst, which gives +20% crit power.
    * Any items that increase crit power can also surpass the cap.
  * Skill power: NONE
    * Will increase the power of items, but only equipment effects; properties do nothing, with the exception of [Valorous Soul](/shallie/properties/valorous-soul/en).
  * Damage reduction: 90%
    * Stacks additively with item effects and properties.
  * Skill WT: 50%
    * Affects regular attacks, but not items or defense.
    * Multiples with Quick reductions and item/skill effects (such as [Shortens Wait](/shallie/effects/shortens-wait-l/en) or Wilbell's Rapid Action).
  * Burst Power: ?
    * Jurie's Field Burst increases burst power and stacks additively with equipment boosts.

## Wait Time (WT)

It's simply a timeline; the timecard is shifted down by an action's WT. Burst is reduced by an amount proportional
to the action's WT, and Kortes's Field Burst reduces this. Assist gauge, rear line recovery, and possibly break
recover in a similar manner.

Turn delay effects have diminishing returns and effectively stop working after the third delay.

Skill/Item WT, quick, and WT reduction buffs are multiplicative. Passives, such as Lotte's
Whimsical Talent (up to 20% reduction), stack additively. However, buffs like [Shortens Wait](/shallie/effects/shortens-wait-l/en) and
Wilbell's Rapid Action will not stack; they replace each other. Skill WT reduction caps at 50%, and
that can generally be reached (or nearly reached) with a [Planet Sphere](/shallie/items/planet-sphere/en) (44%). [Dark God Soul](/shallie/properties/dark-god-soul/en)
gives a 10% reduction; using two puts almost all skills within the range of a Single Time Watch.

Quick effects have no cap (infinite turns are possible) and can be stacked for 0 WT actions.

Attacking has a WT of 19, and defending has a WT of 15. Everything else is in the skill section.

Among items, [Lightning Bomb](/shallie/items/lightning-bomb/en) is best for most debuffing purposes for its extremely short WT (13).

## Miscellaneous

* **Break**
  * Different targets have different break thresholds, resistance, and recovery.
  * This stuff hasn't been tested extensively. I think whimsic_al is crazy for trying in the first place.
  * Breaking with items is glitched; quite often the threshold will be surpassed and reset, ignoring break altogether. This is... okay on higher difficulties, actually.
  * Break Addition on items scales with property bonuses, rather than effect power.
  * Break increase on equips do not seem to scale with effect power.
* **Assist Recovery**
  * Different characters natively have different recovery rates.
  * There is a minimum cap to recovery time.
  * For most characters, the cap is reached with [Earth Spirit Soul](/shallie/properties/earth-spirit-soul/en) x2 or [Ultimate Assist Speed](/shalile/effects/ultimate-assist-speed) on a 999 [Divine Soul](/shallie/items/divine-soul/en).
  * Solle, Jurie, and especially Keith are slower than the rest.

* **Ailments**
  * [Strong Poison](/shallie/effects/strong-poison/en)
    * Base damage over time: 9.7%, 7.9%, 6.8%
    * 999 Damage: 10%, 9%, 8%
    * 999 Damage + Cost Bonus / Property Super Enhance: 20%, 20%, 20%, 13.5%, 12.1%, 11.4%, 9.4%, 8.8%, 7.1%, 6.6%, 5.2%, 5.0%, 3.8%, 3.6%, 3.0%, 2.8%, 2.0%, 1.9%, 1.6%, 1.5%
    * Interpretation: Poison damage caps at 20%, but will decay according to some hidden formula.
  * Poison damage is based off ***current*** HP.
  * Ailment strength scales with effect power and properties, but not in the same way that everything else does.
  * Not a lot is known about this stuff outside of that, truth be told.
