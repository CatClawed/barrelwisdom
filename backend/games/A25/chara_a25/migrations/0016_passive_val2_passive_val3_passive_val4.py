# Generated by Django 5.0.5 on 2024-05-18 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chara_a25', '0015_remove_memoria_hp1_remove_memoria_matk1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='passive',
            name='val2',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='passive',
            name='val3',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='passive',
            name='val4',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
