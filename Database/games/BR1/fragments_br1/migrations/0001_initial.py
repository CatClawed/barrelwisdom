# Generated by Django 3.0.6 on 2021-06-12 05:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('items_br1', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Upgrade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='items_br1.Item')),
            ],
        ),
        migrations.CreateModel(
            name='Fragment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slugname', models.SlugField(unique=True)),
                ('name', models.CharField(max_length=50)),
                ('effect', models.CharField(max_length=500)),
                ('upgrades', models.ManyToManyField(to='fragments_br1.Upgrade')),
            ],
        ),
    ]