# Generated by Django 4.0.2 on 2022-03-01 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('effects_a23', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='effect_en',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='effect_ja',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='effect_ko',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='effect_sc',
            old_name='description',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='effect_tc',
            old_name='description',
            new_name='desc',
        ),
        migrations.AddField(
            model_name='advdata',
            name='baseAtt',
            field=models.CharField(blank=True, default='', max_length=50, null=True),
        ),
    ]