# Generated by Django 3.0.6 on 2021-05-02 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_a22', '0006_auto_20210502_0401'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemregions',
            name='areas',
            field=models.ManyToManyField(blank=True, null=True, to='items_a22.ItemLocations'),
        ),
    ]
