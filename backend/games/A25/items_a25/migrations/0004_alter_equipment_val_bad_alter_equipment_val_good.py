# Generated by Django 4.2.5 on 2023-10-06 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_a25', '0003_item_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='equipment',
            name='val_bad',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='equipment',
            name='val_good',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
