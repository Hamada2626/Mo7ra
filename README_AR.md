# Mø7rä — Android + Firebase Email/Password

## What is configured
- Android/Capacitor app ID: `com.mo7ra.app`
- App name: `Mø7rä`
- GitHub Pages remote URL: `https://hamada2626.github.io/Mo7ra/`
- Existing application HTML copied to both root `index.html` and `www/index.html`.
- Firebase project: `mohra-love` (Web SDK configuration copied from the supplied app file).
- Anonymous Authentication removed; Email/Password sign-in added.
- Login restricted in the client to the two supplied Firebase UIDs.
- Firestore rules: both approved UIDs can read; the admin UID alone can write.

## Important Firebase Console steps
1. In Firebase Authentication > Sign-in method, enable **Email/Password** and disable Anonymous if it is no longer needed.
2. Confirm both supplied email accounts already exist under Authentication > Users and that their UIDs match the values configured in `index.html`.
3. In Firestore > Rules, publish the included `firestore.rules` file. Until published, Firestore permissions will not match the intended admin/viewer roles.
4. In Authentication > Settings > Authorized domains, ensure `hamada2626.github.io` is listed.
5. Confirm Firestore database exists in project `mohra-love`.

## Roles
- Admin UID: full read/write access.
- Viewer UID: read-only access; Firestore rejects create/update/delete operations.
- No public registration form is included. Both accounts must be created in Firebase Authentication by the project owner.
- The password is never stored in this repository or ZIP. Enter it only in the login screen.

## GitHub deployment
Upload/extract the ZIP contents into the root of the `Mo7ra` repository, preserving the `.github` folder. Enable GitHub Pages from the root of the default branch. Then run Actions > Build Mø7rä APK > Run workflow. The APK is uploaded as the `Mo7ra-live-update-APK` artifact.

## Security note
Firebase Web API config is public client configuration, not a service-account credential. Never add a Firebase service-account JSON or Admin SDK private key to this repository. Firestore security is enforced by the included rules, not by hiding buttons in the UI.
