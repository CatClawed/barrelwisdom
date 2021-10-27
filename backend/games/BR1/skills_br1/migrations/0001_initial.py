# Generated by Django 3.0.6 on 2021-06-12 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('effect', models.CharField(max_length=500)),
                ('character', models.CharField(max_length=10)),
                ('rng', models.CharField(max_length=10)),
                ('index', models.IntegerField()),
                ('atk', models.IntegerField(blank=True, null=True)),
                ('dfn', models.IntegerField(blank=True, null=True)),
                ('sup', models.IntegerField(blank=True, null=True)),
                ('tec', models.IntegerField(blank=True, null=True)),
                ('lvl', models.IntegerField(blank=True, null=True)),
                ('wt', models.FloatField()),
                ('mp', models.IntegerField()),
                ('slots', models.IntegerField()),
                ('impact', models.CharField(max_length=15)),
                ('pierce', models.CharField(max_length=15)),
                ('heart', models.CharField(max_length=15)),
                ('flavor', models.CharField(max_length=500)),
                ('isRankUp', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ['index'],
            },
        ),
    ]