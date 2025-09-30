import { createUserWithEmailAndPassword, deleteUser as firebaseDeleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

// đăng ký firebase
export const signup = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Đăng ký thành công")
        return userCredential.user;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Lỗi không xác định';
        throw new Error(`Lỗi đăng ký: ${message}`);
    }
};

// đăng nhập firebase
export const signInWithEmail = async (email: string, password: string, requireEmailVerification: boolean = false) => {
    try {
        console.log("Attempting to sign in with:", email);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("User signed in, email verified:", user.emailVerified);

        // Reload user để cập nhật trạng thái xác minh
        await user.reload();

        // Chỉ kiểm tra email verification nếu được yêu cầu
        if (requireEmailVerification && !user.emailVerified) {
            console.log("Email verification required but not verified");
            throw new Error("Vui lòng xác minh email trước khi đăng nhập!");
        }

        console.log("Đăng nhập thành công:", user.email);
        return user;
    } catch (error: unknown) {
        const firebaseError = error as { code?: string; message?: string };
        console.error("Đăng nhập thất bại:", firebaseError.code, firebaseError.message);
        console.error("Full error:", error);
        throw error;
    }
};

// kiểm tra trạng thái đã đăng nhập

// lấy hồ sơ người dùng đã đăng nhập
export const getUser = () => {
    try {
        return auth.currentUser;
    } catch (error) {
        console.error("Lỗi khi lấy thông tin user:", error);
        return null;
    }
};

// xoá người dùng
export const deleteUser = async () => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("Không có user nào đang đăng nhập");
        }

        await firebaseDeleteUser(user);
        console.log("Đã xoá user thành công:", user.email);
        return true;
    } catch (error) {
        console.error("Lỗi khi xoá user:", error);
        throw error;
    }
};

// đăng xuất
export const logout = async () => {
    try {
        await signOut(auth);
        console.log("Đăng xuất thành công");
        return true;
    } catch (error) {
        console.error("Lỗi khi đăng xuất:", error);
        throw error;
    }
};

// kiểm tra trạng thái đăng nhập
export const onAuthStateChange = (callback: (user: unknown) => void) => {
    return onAuthStateChanged(auth, callback);
};