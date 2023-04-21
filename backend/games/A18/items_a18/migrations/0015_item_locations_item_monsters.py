# Generated by Django 4.1.7 on 2023-03-05 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monsters_a18', '0003_race'),
        ('misc_a18', '0007_alter_areaname_name_en_alter_areaname_slug'),
        ('items_a18', '0014_recipecondition_category_recipecondition_item_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='locations',
            field=models.ManyToManyField(to='misc_a18.areaname'),
        ),
        migrations.AddField(
            model_name='item',
            name='monsters',
            field=models.ManyToManyField(to='monsters_a18.monster'),
        ),
    ]