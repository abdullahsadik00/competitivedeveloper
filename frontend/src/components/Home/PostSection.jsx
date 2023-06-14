import styles from './postSection.module.scss';

export default function PostSection({ post }) {
    return (
        <div className={styles.postSection}>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <div className={styles.postHeaderLeft}>
                        <img src={post.user.avatar} alt="Avatar" />
                    </div>
                    <div className={styles.postHeaderRight}>
                        <span>{`${post.user.first_name} ${post.user.last_name}`}</span>
                    </div>
                </div>

                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                        <span>{post.text}</span>
                    </div>
                    <div className={styles.postBottomRight}>
                        <span>{post.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
