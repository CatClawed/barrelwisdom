# Generated by Django 4.2.5 on 2023-10-05 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0004_alter_filterable_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filterable',
            name='kind',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='filterable',
            name='slug',
            field=models.SlugField(max_length=20),
        ),
        migrations.AlterField(
            model_name='filterable',
            name='text_en',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='filterable',
            name='text_ja',
            field=models.CharField(max_length=20),
        ),
    ]
