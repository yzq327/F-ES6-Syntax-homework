
const inject = (items, sections) => {
    let itemsObject = new Object()
    for (const item in items) {
      itemsObject[item] = items[item]
    }
    sections.map(iterator => {
      const insertIndex = iterator.index
      const movedItem = itemsObject[insertIndex]
      const newIndex = items.indexOf(movedItem)
      items.splice(newIndex, 0, iterator.content)
    })
    return items
  }
export { inject };
