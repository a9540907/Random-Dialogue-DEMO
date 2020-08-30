function randomDialogue(options) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let number1 = Math.floor(Math.random() * 4)
  let number2 = Math.floor(Math.random() * 4)


  if (options.target === 'engineer') {
    return `身為一個工程師，${task.engineer[number1]}，${phrase[number2]}吧！`
  } else if (options.target === 'designer') {
    return `身為一個設計者，${task.designer[number1]}，${phrase[number2]}吧！`
  } else if (options.target === 'entrepreneur') {
    return `身為一個創業家，${task.entrepreneur[number1]}，${phrase[number2]}吧！`
  } else {
    return `請選擇一個職業!`
  }

}

module.exports = randomDialogue