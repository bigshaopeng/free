<?php
class Car
{
    var $color;
    var $name;
    function setColor($value)
    {
        $this->color = $value;
    }
    function getColor()
    {
        echo $this->color;
    }
    function setName($value)
    {
        $this->name = $value;
    }
    function getName()
    {
        echo $this->name;
    }
}

$bm = new Car;
$bc = new Car;
$ad = new Car;

$bm->setColor('red');
$bm->setName('宝马');

$bc->setColor('green');
$bc->setName('奔驰');

$ad->setColor('blue');
$ad->setName('奥迪');

$bm->getColor();
$bm->getName();

$bc->getColor();
$bc->getName();

$ad->getName();
$ad->getColor();

echo 1;
