// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayEvent, Manager};
use tauri_plugin_positioner::{WindowExt, Position};
use window_vibrancy::{apply_vibrancy, apply_mica, NSVisualEffectMaterial, NSVisualEffectState};


fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit").accelerator("Cmd+Q");
  let system_tray_menu = SystemTrayMenu::new().add_item(quit);

  tauri::Builder::default()
    .plugin(tauri_plugin_positioner::init())
    .system_tray(SystemTray::new().with_menu(system_tray_menu).with_title("Yet Another Games Database"))
    .setup(|app| {
        app.set_activation_policy(tauri::ActivationPolicy::Accessory);
        app.listen_global("quit", |_| {
            std::process::exit(0);
        });

        let window = app.get_window("main").unwrap();

        window.open_devtools();

        #[cfg(target_os = "macos")]
        apply_vibrancy(
            &window,
            NSVisualEffectMaterial::Menu,
            Some(NSVisualEffectState::Active),
            Some(6.0),
        )
        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

        #[cfg(target_os = "windows")]
        apply_mica(
          &window,
          Some((18, 18, 18, 125))
        )
        .expect("Unsupported platform! 'apply_blur' is only supported on Windows");


        Ok(())
    })
    .on_system_tray_event(|app, event| {
      tauri_plugin_positioner::on_tray_event(app, &event);
      match event {
        SystemTrayEvent::LeftClick {
          position: _,
          size: _,
          ..
        } => {
          let window = app.get_window("main").unwrap();
          let _ = window.move_window(Position::TrayCenter);

          if window.is_visible().unwrap() {
            window.hide().unwrap();
          } else {
            window.show().unwrap();
            window.set_focus().unwrap();
          }
        }
        SystemTrayEvent::MenuItemClick { id, .. } => {
          match id.as_str() {
            "quit" => {
              std::process::exit(0);
            }
            _ => {}
          }
        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
