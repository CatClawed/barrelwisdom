# Generated by Django 3.0.6 on 2021-06-06 17:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('monsters_a15', '0002_monster_locations'),
        ('regions_a15', '0001_initial'),
        ('items_a15', '0003_auto_20210606_1556'),
    ]

    operations = [
        migrations.CreateModel(
            name='AreaData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subarea', models.CharField(blank=True, max_length=20, null=True)),
                ('area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='regions_a15.Region')),
                ('items', models.ManyToManyField(blank=True, null=True, to='items_a15.Item')),
                ('maxitem', models.ManyToManyField(blank=True, null=True, related_name='MaxItem', to='items_a15.Item')),
                ('monsters', models.ManyToManyField(blank=True, null=True, to='monsters_a15.Monster')),
                ('rare', models.ManyToManyField(blank=True, null=True, related_name='RareItem', to='items_a15.Item')),
            ],
        ),
    ]
