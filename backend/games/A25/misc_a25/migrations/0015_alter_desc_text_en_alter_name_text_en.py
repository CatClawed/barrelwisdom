# Generated by Django 5.0.2 on 2024-02-09 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0014_alter_desc_text_en_alter_desc_text_ja'),
    ]

    operations = [
        migrations.AlterField(
            model_name='desc',
            name='text_en',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='name',
            name='text_en',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
