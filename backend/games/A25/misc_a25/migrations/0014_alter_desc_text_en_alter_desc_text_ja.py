# Generated by Django 4.2.6 on 2023-11-05 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0013_alter_trait_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='desc',
            name='text_en',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='desc',
            name='text_ja',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]