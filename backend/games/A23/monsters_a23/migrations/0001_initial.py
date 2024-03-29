# Generated by Django 4.0.3 on 2022-03-04 01:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('regions_a23', '0003_alter_gathernode_options'),
        ('items_a23', '0007_remove_book_chest_remove_item_chest'),
    ]

    operations = [
        migrations.CreateModel(
            name='Monster_en',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('desc1', models.CharField(blank=True, max_length=270, null=True)),
                ('desc2', models.CharField(blank=True, max_length=270, null=True)),
                ('desc3', models.CharField(blank=True, max_length=270, null=True)),
                ('desc4', models.CharField(blank=True, max_length=270, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Monster_ja',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('desc1', models.CharField(blank=True, max_length=270, null=True)),
                ('desc2', models.CharField(blank=True, max_length=270, null=True)),
                ('desc3', models.CharField(blank=True, max_length=270, null=True)),
                ('desc4', models.CharField(blank=True, max_length=270, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Monster_ko',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('desc1', models.CharField(blank=True, max_length=270, null=True)),
                ('desc2', models.CharField(blank=True, max_length=270, null=True)),
                ('desc3', models.CharField(blank=True, max_length=270, null=True)),
                ('desc4', models.CharField(blank=True, max_length=270, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Monster_sc',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('desc1', models.CharField(blank=True, max_length=270, null=True)),
                ('desc2', models.CharField(blank=True, max_length=270, null=True)),
                ('desc3', models.CharField(blank=True, max_length=270, null=True)),
                ('desc4', models.CharField(blank=True, max_length=270, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Monster_tc',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('desc1', models.CharField(blank=True, max_length=270, null=True)),
                ('desc2', models.CharField(blank=True, max_length=270, null=True)),
                ('desc3', models.CharField(blank=True, max_length=270, null=True)),
                ('desc4', models.CharField(blank=True, max_length=270, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Monster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True)),
                ('kind', models.CharField(max_length=30)),
                ('index', models.IntegerField()),
                ('isDLC', models.BooleanField(default=False)),
                ('resist_mag', models.CharField(blank=True, max_length=10, null=True)),
                ('resist_fire', models.CharField(blank=True, max_length=10, null=True)),
                ('resist_ice', models.CharField(blank=True, max_length=10, null=True)),
                ('resist_thun', models.CharField(blank=True, max_length=10, null=True)),
                ('resist_wind', models.CharField(blank=True, max_length=10, null=True)),
                ('resist_phys', models.CharField(blank=True, max_length=10, null=True)),
                ('hp_rank', models.IntegerField()),
                ('str_rank', models.IntegerField()),
                ('def_rank', models.IntegerField()),
                ('spd_rank', models.IntegerField()),
                ('ailment0', models.IntegerField(default=0)),
                ('ailment1', models.IntegerField(default=0)),
                ('ailment2', models.IntegerField(default=0)),
                ('ailment3', models.IntegerField(default=0)),
                ('ailment4', models.IntegerField(default=0)),
                ('ailment5', models.IntegerField(default=0)),
                ('ailment6', models.IntegerField(default=0)),
                ('ailment7', models.IntegerField(default=0)),
                ('ailment8', models.IntegerField(default=0)),
                ('ailment9', models.IntegerField(default=0)),
                ('ailment10', models.IntegerField(default=0)),
                ('drops', models.ManyToManyField(blank=True, to='items_a23.item')),
                ('location', models.ManyToManyField(to='regions_a23.region')),
                ('mon_en', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='monsters_a23.monster_en')),
                ('mon_ja', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='monsters_a23.monster_ja')),
                ('mon_ko', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='monsters_a23.monster_ko')),
                ('mon_sc', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='monsters_a23.monster_sc')),
                ('mon_tc', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='monsters_a23.monster_tc')),
            ],
            options={
                'ordering': ['index'],
            },
        ),
    ]
