# Generated by Django 3.0.6 on 2021-05-02 04:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations_a22', '0003_location_isdlc'),
        ('items_a22', '0005_auto_20210414_1055'),
    ]

    operations = [
        migrations.AddField(
            model_name='itemlocations',
            name='text',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='ItemRegions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('areas', models.ManyToManyField(to='items_a22.ItemLocations')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locations_a22.Location')),
            ],
        ),
    ]