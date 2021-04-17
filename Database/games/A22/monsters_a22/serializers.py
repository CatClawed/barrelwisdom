from rest_framework import serializers
from games.A22.monsters_a22.models import Monster
from games.A22.items_a22.serializers import A22ItemSerializerSimpleEN, A22ItemSerializerSimpleJA, A22ItemSerializerSimpleKO, A22ItemSerializerSimpleFR, A22ItemSerializerSimpleSC, A22ItemSerializerSimpleTC
from games.A22.locations_a22.serializers import A22LocationSerializerEN, A22LocationSerializerJA, A22LocationSerializerKO, A22LocationSerializerFR, A22LocationSerializerSC, A22LocationSerializerTC

# Name only
class A22MonsterSerializerENName(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_en.name')
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

class A22MonsterSerializerJAName(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_ja.name')
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

class A22MonsterSerializerKOName(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_ko.name')
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

class A22MonsterSerializerFRName(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_fr.name')
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

class A22MonsterSerializerSCName(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_sc.name')
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

class A22MonsterSerializerTCName(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_tc.name')
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

# For filtering
class A22MonsterSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_en.name')
    drops = A22ItemSerializerSimpleEN(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops']

class A22MonsterSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_ja.name')
    drops = A22ItemSerializerSimpleJA(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops']

class A22MonsterSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_ko.name')
    drops = A22ItemSerializerSimpleKO(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops']

class A22MonsterSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_fr.name')
    drops = A22ItemSerializerSimpleFR(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops']

class A22MonsterSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_sc.name')
    drops = A22ItemSerializerSimpleSC(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops']

class A22MonsterSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_tc.name')
    drops = A22ItemSerializerSimpleTC(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops']

# Full Details
class A22MonsterSerializerENFull(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_en.name')
    drops = A22ItemSerializerSimpleEN(many=True)
    location = A22LocationSerializerEN(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank']

class A22MonsterSerializerJAFull(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_ja.name')
    drops = A22ItemSerializerSimpleJA(many=True)
    location = A22LocationSerializerJA(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank']

class A22MonsterSerializerKOFull(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_ko.name')
    drops = A22ItemSerializerSimpleKO(many=True)
    location = A22LocationSerializerKO(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank']

class A22MonsterSerializerFRFull(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_fr.name')
    drops = A22ItemSerializerSimpleFR(many=True)
    location = A22LocationSerializerFR(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank']

class A22MonsterSerializerSCFull(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_sc.name')
    drops = A22ItemSerializerSimpleSC(many=True)
    location = A22LocationSerializerSC(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank']

class A22MonsterSerializerTCFull(serializers.ModelSerializer):
    name = serializers.CharField(source='mon_tc.name')
    drops = A22ItemSerializerSimpleTC(many=True)
    location = A22LocationSerializerTC(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'montype', 'index', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank']