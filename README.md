# cva-component

This is a library based on the awesome project CVA created by Joe Bell (https://cva.style/docs)
Since CVA is very unopiniated I decided to add some of my opinions on top of it. The main goal is to make it easier to create React components using it, in a sintax very similar to css-in-js

## Install

```bash
npm install cva-component
```

```bash
yarn add cva-component
```

## Usage

here is a small example on how to use this lib

```
import { CVAComponent } from 'cva-component'

export const AvatarBorder = CVAComponent('div', {
  base: `
    rounded-full flex items-center justify-center 
    bg-gradient-to-b from-green-50 to-purple-50
  `,
  variants: {
    size: {
      sm: `h-8 w-8`,
      md: `h-10 w-10`,
      lg: `h-[72px] w-[72px]`,
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

```

the first paramater is a html tag or a React component to which you want to pass the classname. The second parameter is a config object that will be passed to CVA under the hood. The return will be a component, you can use it like this:

```
import * as S from './styles'

...

<S.AvatarBorder variants={{ size: 'sm' }}>
...
</S.AvatarBorder>
```

Have you got tired of writing hover:something hover:something-else when working with tailwindcss? This lib also gives you a nicer way to write this:

```
import { CVAComponent, before } from 'cva-component'

export const NavigationContainer = CVAComponent('div', {
  base: `
    fixed left-1 top-1 bottom-1 
    flex flex-col rounded-xl  
    my-5 ml-5 p-12 
    bg-cover bg-no-repeat
  `,
})

export const NavigationItem = CVAComponent('div', {
  base: 'flex items-center pl-5 gap-3 py-2 relative',
  variants: {
    isSelected: {
      true: [
        'text-gray-100 bold',
        before(`
          w-1 h-6 rounded-full 
          absolute left-0
          bg-gradient-to-b 
          from-green-50 to-purple-50
        `),
      ],
      false: `text-gray-400`,
    },
  },
})
```

I added functions for the selectors I use the most, like hover, before, etc. But if you want to target other selector that is not there you can import `selector` and pass the selector you want as the first parameter

## Intelisense

Add this to your settings.json file:

```
"tailwindCSS.experimental.classRegex": [
    "cva\\(([^)]*)\\)",
    "[\"'`]([^\"'`]*).*?[\"'`]",
    "CVAComponent\\s*\\(\\s*[`'\"]([a-zA-Z0-9\\s\\-]+)[`'\"]\\s*,\\s*{\\s*(?:base:\\s*([`'\"][^`'\\\"]*[`'\"])[,\\s]*)?\\s*variants:\\s*{(?:\\s*[a-zA-Z0-9_]+\\s*:\\s*{\\s*(?:[a-zA-Z0-9_]+\\s*:\\s*([`'\"][^`'\\\"]*[`'\"])[,\\s]*)*}\\s*,?\\s*)*}\\s*\\)"
  ]
```

## License

MIT © [FilipePfluck](https://github.com/FilipePfluck)
