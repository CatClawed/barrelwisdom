# Generated by Django 5.0.5 on 2024-06-19 20:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('traits_a22', '0003_rename_slugname_trait_slug'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trait_en',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='trait_fr',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='trait_ja',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='trait_ko',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='trait_sc',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='trait_tc',
            old_name='description',
            new_name='desc',
        ),
    ]
