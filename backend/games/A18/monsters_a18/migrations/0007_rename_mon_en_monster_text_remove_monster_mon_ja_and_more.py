# Generated by Django 4.1.7 on 2023-03-11 02:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('monsters_a18', '0006_monster_isdx'),
    ]

    operations = [
        migrations.RenameField(
            model_name='monster',
            old_name='mon_en',
            new_name='text',
        ),
        migrations.RemoveField(
            model_name='monster',
            name='mon_ja',
        ),
        migrations.RemoveField(
            model_name='monster',
            name='mon_sc',
        ),
        migrations.RemoveField(
            model_name='monster',
            name='mon_tc',
        ),
    ]
