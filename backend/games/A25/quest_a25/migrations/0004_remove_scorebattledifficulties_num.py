# Generated by Django 4.2.5 on 2023-10-16 04:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quest_a25', '0003_remove_scorebattle_difficulties_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='scorebattledifficulties',
            name='num',
        ),
    ]
