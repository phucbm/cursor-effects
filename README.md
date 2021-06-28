# Cursor Effects

In this repository, you will find a several interesting effects which interact with mouse cursor.

Each effect has a demo, and the source code is open to use for everyone.

## Mouse Follower

This effect is rather simple. We will update an element's position based on the mouse's coordinates on the screen.

See demo at [/mouse-follower](https://phucbm.github.io/cursor-effects/mouse-follower) or check
the [source code](https://github.com/phucbm/cursor-effects/tree/main/mouse-follower)

## Magnetic Button

We will need a bit more of mathematics to get to know the way this effect works. See the chart below:

![alt text](assets/images/cursor-effects-magnetic-button.jpeg "Magnetic Button Chart")

We will create a virtual area around the element, whenever the mouse get into that area, the element will stick with the
mouse. To know when the mouse is designated zone, we will use a simple formula that we've learned from high school.

```js
OA = sqrt(pow(x, 2) + pow(y, 2));
```

See demo at [/magnetic-button](https://phucbm.github.io/cursor-effects/magnetic-button) or check
the [source code](https://github.com/phucbm/cursor-effects/tree/main/magnetic-button)

## Custom Cursor

This one is the most complex one in the series. The original code was from OsuBlake, you can check it out
on [CodePen](https://codepen.io/osublake/pen/3170174f4ce844f78c7789a279f8e50e). I've created a plugin-like function so
that we can reuse it anywhere. Go check the options table below:

|Option|Type|Default|Description|
|---|---|---|---|
|`targetClass`|`string`|'custom-cursor'|Create element with this class.|
|`wrapper`|`jQuery`|$('body')|Cursor will be appended to this element.|
|`speed`|`number`|.1|1 for fast, 0 for slow.|
|`movingDelay`|`number`|300|Stop turns true after delay of milliseconds.|
|`hasHover`|`boolean`|false|Turn on hover events.|
|`hoverTarget`|`jQuery`|$('a[href], button')|Elements that able to be hovered.|
|`touchDevices`|`boolean`|false|Show custom cursor on touch devices.|

See demo at [/custom-cursor](https://phucbm.github.io/cursor-effects/custom-cursor) or check
the [source code](https://github.com/phucbm/cursor-effects/tree/main/custom-cursor)
