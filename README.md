# mac-dock-clone
🎱 neat, minimalistic, customizable react component (inspired by mac dock app)

### feature
- `mouseover`, `mouseout` to zoom/un-zoom icons
- `click` to change _active_ icon
- customizable icons, zoom factors, positions etc

### usage

| default props | value |
| :------------- | :------------- |
| children (nav items) | `['🤣', '🙃', '😞', '🙁', '🤔'].map(e => <span>{e}</span>)` |
| pos (position of dock left/right/bottom) | 'bottom' |
| zooms (factors to zoom the hovered icons) | [2, 1.5, 1.2] |
| style (customizable styles) | { active: {border: '5px outset rgba(142, 139, 140, 0.8)'} } |

```js
import Dock from './dist/bundle.js'

const YourWrapperComponent = () => (
	<div>
		...
		<Dock />
		...
	</div>
)
```

### preview
![preview](./preview)
