# Generated by Django 5.0.7 on 2024-09-20 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chara_a25', '0020_remove_emblem_desc1_remove_emblem_desc2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='emblem',
            name='eid',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
