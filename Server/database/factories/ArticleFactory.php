<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(rand(5, 21), $asText = false),
        'author' => $faker->name(),
        'date' => $faker->dateTimeBetween('-10 years', 'now', null),
        'content' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'image' => $faker->imageUrl($width = 640, $height = 480),
    ];
});
