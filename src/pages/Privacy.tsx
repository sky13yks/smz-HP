import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';

export function Privacy() {
    useDocumentTitle('プライバシーポリシー');

    return (
        <div className="min-h-screen bg-background">
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-none">
                            プライバシーポリシー
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            最終更新日: 2026年4月1日
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <ScrollRevealSection><div className="container mx-auto px-6 max-w-3xl">
                    <div className="space-y-12 text-sm text-foreground/80 leading-relaxed">

                        <div>
                            <p>
                                株式会社清水商會（以下「当社」）は、お客様からお預かりする個人情報の重要性を認識し、
                                その保護を社会的責務と考え、以下のとおりプライバシーポリシーを定め、適切な管理・保護に努めます。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">1. 個人情報の定義</h2>
                            <p>
                                本ポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、
                                氏名、会社名、メールアドレス、電話番号など、特定の個人を識別できる情報をいいます。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">2. 個人情報の収集</h2>
                            <p className="mb-3">当社は、以下の場合に個人情報を収集することがあります。</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>お問い合わせフォームからのご連絡時（会社名、氏名、メールアドレス、お問い合わせ内容）</li>
                                <li>お電話・メールでのお問い合わせ時</li>
                                <li>お取引の開始・継続にあたり必要な情報のご提供時</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">3. 個人情報の利用目的</h2>
                            <p className="mb-3">収集した個人情報は、以下の目的の範囲内で利用いたします。</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>お問い合わせへの回答およびご連絡</li>
                                <li>製品・サービスに関する情報のご提供</li>
                                <li>お見積り・ご注文の対応</li>
                                <li>アフターサービス・メンテナンスのご連絡</li>
                                <li>当社サービスの改善および新サービスの開発</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">4. 個人情報の第三者提供</h2>
                            <p>
                                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                            </p>
                            <ul className="list-disc ml-6 space-y-2 mt-3">
                                <li>法令に基づく場合</li>
                                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">5. 個人情報の安全管理</h2>
                            <p>
                                当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、
                                必要かつ適切な措置を講じます。当ウェブサイトでは、お問い合わせフォームの通信にSSL暗号化を使用し、
                                個人情報の送信時のセキュリティを確保しています。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">6. 個人情報の開示・訂正・削除</h2>
                            <p>
                                お客様ご本人から個人情報の開示、訂正、削除、利用停止のご請求があった場合、
                                ご本人確認のうえ、合理的な期間内に対応いたします。
                                下記のお問い合わせ窓口までご連絡ください。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">7. Cookieおよびアクセス解析</h2>
                            <p>
                                当ウェブサイトでは、利便性の向上およびアクセス状況の分析を目的として、
                                Cookieを使用する場合があります。Cookieによって個人を特定する情報は収集しません。
                                ブラウザの設定によりCookieの受け取りを拒否することも可能ですが、
                                一部のサービスが正常に利用できなくなる場合があります。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-foreground mb-4">8. 本ポリシーの変更</h2>
                            <p>
                                当社は、法令の改正や事業内容の変更等に伴い、本ポリシーを予告なく改定することがあります。
                                改定後のポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
                            </p>
                        </div>

                        <div className="border-t border-border pt-10">
                            <h2 className="text-lg font-medium text-foreground mb-4">お問い合わせ窓口</h2>
                            <div className="bg-secondary border border-border rounded-lg p-6 space-y-2">
                                <p className="font-medium text-foreground">株式会社清水商會</p>
                                <p>〒146-0093 東京都大田区矢口3-1-20</p>
                                <p>TEL: 03-5732-2800</p>
                                <p>Email: team@smz-shokai.com</p>
                            </div>
                        </div>

                    </div>
                </div></ScrollRevealSection>
            </section>
        </div>
    );
}
