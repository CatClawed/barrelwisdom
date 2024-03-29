# Generated by Django 4.1.4 on 2023-02-27 03:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdvData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('baseAtt', models.CharField(blank=True, default='', max_length=50)),
                ('attTag0', models.CharField(blank=True, default='', max_length=50)),
                ('actTag0', models.CharField(blank=True, default='', max_length=50)),
                ('min_1_0', models.CharField(blank=True, default='', max_length=50)),
                ('max_1_0', models.CharField(blank=True, default='', max_length=50)),
                ('min_2_0', models.CharField(blank=True, default='', max_length=50)),
                ('max_2_0', models.CharField(blank=True, default='', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Trait',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True)),
                ('index', models.IntegerField()),
                ('grade', models.IntegerField()),
                ('trans_atk', models.BooleanField(default=False)),
                ('trans_heal', models.BooleanField(default=False)),
                ('trans_wpn', models.BooleanField(default=False)),
                ('trans_arm', models.BooleanField(default=False)),
                ('trans_acc', models.BooleanField(default=False)),
                ('trans_syn', models.BooleanField(default=False)),
                ('name_en', models.CharField(max_length=50)),
                ('desc_en', models.CharField(blank=True, max_length=250)),
                ('name_ja', models.CharField(max_length=50)),
                ('desc_ja', models.CharField(blank=True, max_length=250)),
                ('name_sc', models.CharField(max_length=50)),
                ('desc_sc', models.CharField(blank=True, max_length=250)),
                ('name_tc', models.CharField(max_length=50)),
                ('desc_tc', models.CharField(blank=True, max_length=250)),
                ('combo1', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='effects_traits_a18.trait')),
                ('combo2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='combo_2', to='effects_traits_a18.trait')),
            ],
            options={
                'ordering': ['index'],
            },
        ),
        migrations.CreateModel(
            name='Effect',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True)),
                ('index', models.IntegerField()),
                ('name_en', models.CharField(max_length=50)),
                ('desc_en', models.CharField(blank=True, max_length=250)),
                ('name_ja', models.CharField(max_length=50)),
                ('desc_ja', models.CharField(blank=True, max_length=250)),
                ('name_sc', models.CharField(max_length=50)),
                ('desc_sc', models.CharField(blank=True, max_length=250)),
                ('name_tc', models.CharField(max_length=50)),
                ('desc_tc', models.CharField(blank=True, max_length=250)),
                ('advanced', models.ManyToManyField(to='effects_traits_a18.advdata')),
            ],
            options={
                'ordering': ['index'],
            },
        ),
    ]
