# Generated by Django 3.2.5 on 2021-07-11 05:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('monsters_a12', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='monster',
            options={'ordering': ['index']},
        ),
    ]
