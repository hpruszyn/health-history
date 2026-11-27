/** Reflow the time axis without changing the data or the vertical scale. */
export function responsiveChart(svg: SVGSVGElement, left: number, right: number, mobileLeft: number) {
  const height = svg.viewBox.baseVal.height;
  const desktopWidth = svg.viewBox.baseVal.width;
  const entries = [...svg.querySelectorAll<SVGElement>('[x], [x1], [x2], [cx], path[d]')].map(el => ({
    el,
    attrs: ['x', 'x1', 'x2', 'cx', 'd'].filter(attr => el.hasAttribute(attr)).map(attr => [attr, el.getAttribute(attr)!] as const),
  }));
  const query = matchMedia('(max-width: 700px)');
  const geometry = () => query.matches ? { width: 500, left: mobileLeft, right: 484 } : { width: desktopWidth, left, right };
  const apply = () => {
    const next = geometry();
    const mapX = (x: number) => next.left + (x - left) / (right - left) * (next.right - next.left);
    svg.setAttribute('viewBox', `0 0 ${next.width} ${height}`);
    for (const { el, attrs } of entries) for (const [attr, value] of attrs) {
      el.setAttribute(attr, !query.matches ? value : attr === 'd'
        ? value.replace(/([ML])(-?\d+(?:\.\d+)?),/g, (_, command, x) => `${command}${mapX(Number(x)).toFixed(2)},`)
        : String(mapX(Number(value))));
    }
    svg.dispatchEvent(new Event('chartresize'));
  };
  apply();
  query.addEventListener('change', apply);
  return geometry;
}
