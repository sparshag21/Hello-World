// Print a triangle of *

fn main() {
    let mut stars = "*".to_string();

    for _i in 0..4 {
        println!("{}", stars);
        stars.push_str(" *");
    }
}