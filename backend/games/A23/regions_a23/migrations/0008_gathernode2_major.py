# Generated by Django 4.0.3 on 2022-03-14 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('regions_a23', '0007_climate2_mons'),
    ]

    operations = [
        migrations.AddField(
            model_name='gathernode2',
            name='major',
            field=models.BooleanField(default=False),
        ),
    ]
