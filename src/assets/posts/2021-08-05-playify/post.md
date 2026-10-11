Playify was a guitar-learning prototype. A Rust library compiled to WebAssembly analyzed microphone audio using an FFT followed by the harmonic product spectrum technique. An SVG renderer updated the guitar tablature in the browser.

```bash
cargo new --lib add_numbers
cd add_numbers
Open the src/lib.rs file and replace its contents with the following Rust code:
```

```rust
#[no_mangle]
pub extern "C" fn add_numbers(a: i32, b: i32) -> i32 {
    a + b
}
```

```bash
cargo build --target wasm32-unknown-unknown
```

```bash
wasm2wat target/wasm32-unknown-unknown/debug/add_numbers.wasm -o add_numbers.wat
```

![Screenshot](assets/posts/2021-08-05-playify/1.webp "Screenshot")

![Screenshot](assets/posts/2021-08-05-playify/2.webp "Screenshot")
