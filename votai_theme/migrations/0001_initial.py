# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('candidator', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnswerValue',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('value', models.IntegerField(default=0)),
                ('position', models.OneToOneField(to='candidator.Position')),
            ],
        ),
    ]
