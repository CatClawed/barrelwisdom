# Generated by Django 3.0.6 on 2021-06-07 21:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Region_en',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Region_ja',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slugname', models.SlugField(unique=True)),
                ('reg_en', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='regions_a12.Region_en')),
                ('reg_ja', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='regions_a12.Region_ja')),
            ],
        ),
    ]
