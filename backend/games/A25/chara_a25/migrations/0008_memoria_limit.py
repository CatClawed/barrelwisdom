# Generated by Django 4.2.5 on 2023-10-17 22:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0010_delete_update_remove_trait_timestamp'),
        ('chara_a25', '0007_character_limit'),
    ]

    operations = [
        migrations.AddField(
            model_name='memoria',
            name='limit',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='memoria_limited', to='misc_a25.desc'),
        ),
    ]
