# Generated by Django 5.0.5 on 2024-06-19 20:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('items_br1', '0004_rename_slugname_item_slug'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='description',
            new_name='desc',
        ),
    ]
