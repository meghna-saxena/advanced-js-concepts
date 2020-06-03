function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} to ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

function memoFnLoop(i, end) {
  if (i < end) {
    memoFnLoop(i + 1, end);
  }
}
