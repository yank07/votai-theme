=============================
votai-theme
=============================

.. image:: https://badge.fury.io/py/votai-theme.png
    :target: https://badge.fury.io/py/votai-theme

.. image:: https://travis-ci.org/YoQuieroSaber/votai-theme.svg?branch=master
    :target: https://travis-ci.org/YoQuieroSaber/votai-theme

.. image:: https://coveralls.io/repos/YoQuieroSaber/votai-theme/badge.png?branch=master
    :target: https://coveralls.io/r/YoQuieroSaber/votai-theme?branch=master

Tema de la instnancia de Vota Inteligente para YoQuieroSaber Argentina, elecciones 2015. Incluye el juego de Yo Quiero Saber.

Documentation
-------------

The full documentation is at https://votai-theme.readthedocs.org.

Quickstart
----------

Este tema funciona como un módulo de django utilizado por el votainteligente-portal-electoral.

Por favor siga las instricciones de instalación disponibles en:
	http://github.com/ciudadanointeligente/votainteligente-portal-electoral

Debe configurar el theme en el archivo local_settings.py de votainteligente para que este funcione, ejemplo:
	THEME = 'votai_theme'

El theme debe estar instalado en el mismo entorno virtual (virtualenv) que el votainteligente, esto se realiza con el siguiente comando:

Install votai-theme::

    pip install votai-theme

Then use it in a project::

    import votai-theme

Features
--------

* Juego interactivo
* Da la cara
* Perfiles de todos los candidatos
* Múltiples elecciones simultáneas
* Funcionalidad de compartir en redes sociales con generación reducida de sombra (SocialSharePrivacy)
* Theme y juego responsive y compatible con la mayoría de dispositivos.

Bug reports
-----------
Cualquier problema que encuentre, por favor repórtelo en nuestra sección de issues
	http://github.com/yoquierosaber/votai-theme


