# Generated by Django 3.2.8 on 2022-09-02 16:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('chapter', '0001_initial'),
        ('novel', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapter',
            name='novelID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chaptersID', to='novel.novel'),
        ),
    ]
