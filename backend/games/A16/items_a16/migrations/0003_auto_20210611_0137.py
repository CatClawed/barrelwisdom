# Generated by Django 3.0.6 on 2021-06-11 01:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_a16', '0002_effectdata_effectlines'),
    ]

    operations = [
        migrations.AlterField(
            model_name='effectdata',
            name='number',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]