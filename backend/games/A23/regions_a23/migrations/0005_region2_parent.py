# Generated by Django 4.0.3 on 2022-03-04 07:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('regions_a23', '0004_climate2_region2_gathernode2_gatheritem2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='region2',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='regions_a23.region2'),
        ),
    ]
