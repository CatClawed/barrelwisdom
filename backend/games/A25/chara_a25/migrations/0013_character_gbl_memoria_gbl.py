# Generated by Django 4.2.7 on 2024-02-04 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chara_a25', '0012_skill_val0_2_skill_val1_2_skill_val2_2_skill_val3_2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='gbl',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='memoria',
            name='gbl',
            field=models.BooleanField(default=False),
        ),
    ]
