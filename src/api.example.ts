// import term from 'cli-giz'

// const hash = {
//   'left-arrow': () => {},
//   'right-arrow': () => {},
// }

// const example = async () => {
//   const answer = await term.prompt
//     .onKeyPress('left-arrow', (state) => { state.index = Math.max(0, state.index - 1) })
//     .onKeyPress('right-arrow', (state) => { state.index = Math.min(3, state.index + 1) })
//     .onKeyPress('enter', (_, resolve) => resolve())
//     .paint((state) => ['ts', 'ts-1', 'ts-2'].map((_, i) => i === state.index ? bold(_) : _))
//     ({ index: 0 })

//     const answer_radio = await term.prompt.radio((index) => {})

//   // const answer = await term.prompt
//   //   .onKeyPress((key, state) => {
//   //     switch (key) {
//   //       case 'left-arrow': return state.index = Math.max(0, state.index - 1);
//   //       case 'right-a'
//   //     }
//   //   })
// }