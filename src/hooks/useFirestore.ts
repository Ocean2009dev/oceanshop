import { useState, useEffect } from 'react';
import { DocumentData } from 'firebase/firestore';
import { FirestoreService } from '../services/firestoreService';

// Hook để fetch data từ Firestore
export const useFirestoreCollection = <T extends DocumentData>(
    service: FirestoreService<T>
) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await service.getAll();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [service]);

    const refetch = async () => {
        try {
            setLoading(true);
            const result = await service.getAll();
            setData(result);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, refetch };
};

// Hook để fetch single document
export const useFirestoreDocument = <T extends DocumentData>(
    service: FirestoreService<T>,
    id: string | null
) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setData(null);
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await service.getById(id);
                setData(result);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [service, id]);

    const refetch = async () => {
        if (!id) return;

        try {
            setLoading(true);
            const result = await service.getById(id);
            setData(result);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, refetch };
};

// Hook để thực hiện CRUD operations
export const useFirestoreCRUD = <T extends DocumentData>(
    service: FirestoreService<T>
) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const create = async (data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<string | null> => {
        try {
            setLoading(true);
            setError(null);
            const id = await service.add(data);
            return id;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            return null;
        } finally {
            setLoading(false);
        }
    };

    const update = async (id: string, data: Partial<Omit<T, 'id' | 'createdAt'>>): Promise<boolean> => {
        try {
            setLoading(true);
            setError(null);
            await service.update(id, data);
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const remove = async (id: string): Promise<boolean> => {
        try {
            setLoading(true);
            setError(null);
            await service.delete(id);
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { create, update, remove, loading, error };
};