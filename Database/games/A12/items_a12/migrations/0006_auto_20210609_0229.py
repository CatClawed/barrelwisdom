# Generated by Django 3.0.6 on 2021-06-09 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_a12', '0005_auto_20210609_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='equip',
            name='atk',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='equip',
            name='defen',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='equip',
            name='hp',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='equip',
            name='lp',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='equip',
            name='mp',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='equip',
            name='spd',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
