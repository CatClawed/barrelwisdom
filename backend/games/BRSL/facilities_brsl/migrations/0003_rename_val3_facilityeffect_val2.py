# Generated by Django 3.2.9 on 2021-12-03 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('facilities_brsl', '0002_remove_facilityeffect_slugname'),
    ]

    operations = [
        migrations.RenameField(
            model_name='facilityeffect',
            old_name='val3',
            new_name='val2',
        ),
    ]
