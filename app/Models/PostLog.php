<?php

namespace App\Models;

use App\Models\Traits\HasDates;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\PostLog
 *
 * @property int $aid
 * @property int $uid
 * @property string|null $title
 * @property string|null $action_type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\PostItem $post
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog query()
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog whereActionType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog whereAid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostLog whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class PostLog extends Model
{
    use HasDates;

    protected $table = 'post_log';
    protected $primaryKey = 'id';
    protected $fillable = ['aid', 'uid', 'title', 'action_type'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo(PostItem::class, 'aid', 'aid');
    }
}
