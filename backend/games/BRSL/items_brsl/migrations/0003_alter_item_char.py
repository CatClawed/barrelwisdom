# Generated by Django 3.2.9 on 2021-12-01 03:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_brsl', '0002_auto_20211201_0319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='char',
            field=models.CharField(max_length=15),
        ),
    ]
