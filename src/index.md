---
layout: base.njk
title: Missed Steak - Vegetarian Recipes
---

<!-- Masthead-->
<header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <img class="masthead-avatar mb-5" src="/assets/img/salad.png" alt="..." />
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">vegetarian recipes</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-utensils"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">This recipes will show you that becoming a vegetarian
            is not a missed steak</p>
    </div>
</header>

<!-- Portfolio Section-->
<section class="page-section portfolio" id="portfolio">
    <div class="container">
        <!-- Portfolio Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Savory</h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-carrot"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row justify-content-center">
            {% for filename, recipe in recipes.savory %}
                {% include "recipe-card.html" %}
            {% endfor %}
        </div>
    </div>
</section>

<!-- About Section-->
<section class="page-section bg-primary text-white mb-0" id="about">
    <div class="container">
        <!-- About Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-white">Sweet</h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-candy-cane"></i></div>
            <div class="divider-custom-line"></div>
        </div>
    <div class="row justify-content-center">
        {% for filename, recipe in recipes.sweet %}
            {% include "recipe-card.html" %}
        {% endfor %}
    </div>
    </div>
</section>

<!-- Recipe Modals -->

{% for filename, recipe in recipes.savory %}
{% include "recipe-modal.html" %}
{% endfor %}

{% for filename, recipe in recipes.sweet %}
{% include "recipe-modal.html" %}
{% endfor %}
